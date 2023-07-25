// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {EndpointOption} from './types.js';
import {nodesCereSVG} from '../ui/logos/nodes/index.js';

export * from './testingRelayRococo.js';
export * from './testingRelayWestend.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testChains: EndpointOption[] = [
  {
    info: 'cere',
    text: 'Cere Testnet',
    providers: {
      'Cere Network': 'wss://archive.testnet.cere.network:9945/',
      'Republic Crypto | Runtime': 'wss://testnet.cere-archive.republiccrypto-runtime.com:444'
    },
    ui: {
      color: '#b7aeff',
      logo: nodesCereSVG
    }
  },
  {
    info: 'cere',
    text: 'Cere QAnet',
    providers: {
      'Cere Network': 'wss://archive.qanet.cere.network/ws'
    },
    ui: {
      color: '#b7aeff',
      logo: nodesCereSVG
    }
  },
  {
    info: 'cere',
    text: 'Cere Devnet',
    providers: {
      'Cere Network': 'wss://archive.devnet.cere.network/ws'
    },
    ui: {
      color: '#b7aeff',
      logo: nodesCereSVG
    }
  },
];
