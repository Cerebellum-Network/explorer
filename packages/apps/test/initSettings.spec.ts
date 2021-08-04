// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assert } from '@polkadot/util';

describe('Testing Init Function', () => {
  function urlValidator (url: string): string {
    assert(url.startsWith('ws://') || url.startsWith('wss://'), 'Non-prefixed ws/wss url');

    const urlArray = ['127.0.0.1', 'localhost', '.cere.network'];
    const URLObj = new URL(url);
    let hostname = URLObj.hostname;
    const port = Number(URLObj.port);

    if (port) {
      assert(port < 64000, 'Invalid ws port');
    }

    if (hostname !== 'localhost') {
      hostname = getDomainName(hostname);
    }

    assert(urlArray.includes(hostname), 'Invalid ws url');

    return url;
  }

  function getDomainName (hostname: string): string {
    return hostname.substr(-13);
  }

  test('It should return URL for ws://localhost:9944', (done) => {
    const result = urlValidator('ws://localhost:9944');

    expect(result).toBe('ws://localhost:9944');
    done();
  });

  test('It should return URL for ws://127.0.0.1:9944', (done) => {
    const result = urlValidator('ws://127.0.0.1:9944');

    expect(result).toBe('ws://127.0.0.1:9944');
    done();
  });

  test('It should throw error for ws://localhost:65000', (done) => {
    try {
      urlValidator('ws://localhost:65000');
    } catch (error) {
      expect(error).toMatchObject(new Error('Invalid ws port'));
      done();
    }
  });

  test('It should throw error for ws://198.162.1.1:9944', (done) => {
    try {
      urlValidator('ws://198.162.1.1:9944');
    } catch (error) {
      expect(error).toMatchObject(new Error('Invalid ws url'));
      done();
    }
  });

  test('It should return URL for ws://dev.cere.network:9944', (done) => {
    const result = urlValidator('ws://dev.cere.network:9944');

    expect(result).toBe('ws://dev.cere.network:9944');
    done();
  });

  test('It should return URL for wss://dev.cere.network:9944', (done) => {
    const result = urlValidator('wss://dev.cere.network:9944');

    expect(result).toBe('wss://dev.cere.network:9944');
    done();
  });

  test('It should throw error for wss://cere.dev.network:9944', (done) => {
    try {
      urlValidator('wss://cere.dev.network:9944');
    } catch (error) {
      expect(error).toMatchObject(new Error('Invalid ws url'));
      done();
    }
  });

  test('It should throw error for wss://dev.cere.network:65000', (done) => {
    try {
      urlValidator('wss://dev.cere.network:65000');
    } catch (error) {
      expect(error).toMatchObject(new Error('Invalid ws port'));
      done();
    }
  });
});
