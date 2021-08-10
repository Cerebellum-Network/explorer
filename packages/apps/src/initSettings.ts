// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import queryString from 'query-string';
import store from 'store';

import { createWsEndpoints } from '@polkadot/apps-config';
import { extractIpfsDetails } from '@polkadot/react-hooks/useIpfs';
import { settings } from '@polkadot/ui-settings';
import { assert } from '@polkadot/util';

function getDomainName (hostname: string): string {
  return hostname.substr(-13);
}

export function validateURL (url: string): string {
  if (!/^wss?:\/\//.test(url)) {
    throw new Error('Non-prefixed ws/wss url');
  }

  const urlArray = ['127.0.0.1', 'localhost', '.cere.network'];
  const URLObj = new URL(url);
  let hostname = URLObj.hostname;
  const port = Number(URLObj.port);

  if (port) {
    if (port > 64000) {
      throw new Error('Invalid ws port');
    }
  }

  if (hostname !== 'localhost') {
    hostname = getDomainName(hostname);
  }

  assert(urlArray.includes(hostname), 'Invalid ws url');

  return url;
}

function getApiUrl (): string {
  // we split here so that both these forms are allowed
  //  - http://localhost:3000/?rpc=wss://substrate-rpc.parity.io/#/explorer
  //  - http://localhost:3000/#/explorer?rpc=wss://substrate-rpc.parity.io
  const urlOptions = queryString.parse(location.href.split('?')[1]);

  // if specified, this takes priority
  if (urlOptions.rpc) {
    assert(!Array.isArray(urlOptions.rpc), 'Invalid WS endpoint specified');

    // https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9944#/explorer;
    const url = decodeURIComponent(urlOptions.rpc.split('#')[0]);

    const validatedUrl = validateURL(url);

    return validatedUrl;
  }

  const endpoints = createWsEndpoints(<T = string>(): T => ('' as unknown as T));
  const { ipnsChain } = extractIpfsDetails();

  // check against ipns domains (could be expanded to others)
  if (ipnsChain) {
    const option = endpoints.find(({ dnslink }) => dnslink === ipnsChain);

    if (option) {
      return option.value as string;
    }
  }

  const stored = store.get('settings') as Record<string, unknown> || {};
  const fallbackUrl = endpoints.find(({ value }) => !!value);

  // via settings, or the default chain
  return [stored.apiUrl, process.env.WS_URL].includes(settings.apiUrl)
    ? settings.apiUrl // keep as-is
    : fallbackUrl
      ? fallbackUrl.value as string // grab the fallback
      : 'ws://127.0.0.1:9944'; // nothing found, go local
}

const apiUrl = getApiUrl();

// set the default as retrieved here
settings.set({ apiUrl });

console.log('WS endpoint=', apiUrl);
