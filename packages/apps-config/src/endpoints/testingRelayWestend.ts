// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { WESTEND_GENESIS } from '../api/constants.js';
import { chainsKaruraSVG, chainsStandardPNG } from '../ui/logos/chains/index.js';
import { nodesAssetHubSVG, nodesBridgeHubSVG, nodesCentrifugePNG, nodesIntegriteeSVG, nodesInterlaySVG, nodesKhalaSVG, nodesKylinPNG, nodesMoonshadowPNG, nodesWestendColourSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasWestend: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'charcoal',
    isDisabled: true,
    paraId: 2086,
    providers: {
      // Centrifuge: 'wss://fullnode-collator.charcoal.centrifuge.io' // https://github.com/polkadot-js/apps/issues/8219
    },
    text: 'Charcoal',
    ui: {
      logo: nodesCentrifugePNG
    }
  },
  {
    info: 'integritee',
    isDisabled: true,
    paraId: 2081,
    providers: {
      // Integritee: 'wss://teerw1.integritee.network' // https://github.com/polkadot-js/apps/issues/8937
    },
    text: 'Integritee Network',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG
    }
  },
  {
    info: 'interlay',
    isDisabled: true,
    paraId: 2094,
    providers: {
      // Interlay: 'wss://api-westend.interlay.io/parachain' // https://github.com/polkadot-js/apps/issues/6261
    },
    text: 'Interlay',
    ui: {
      logo: nodesInterlaySVG
    }
  },
  {
    info: 'moonshadow',
    isDisabled: true,
    paraId: 2002,
    providers: {
      // PureStake: 'wss://wss.moonshadow.testnet.moonbeam.network' // https://github.com/polkadot-js/apps/issues/6181
    },
    text: 'Moonshadow',
    ui: {
      color: '#53cbc9',
      logo: nodesMoonshadowPNG
    }
  },
  {
    homepage: 'https://kylin.network/',
    info: 'westendPichiu',
    isDisabled: true,
    paraId: 2112,
    providers: {
      // 'Kylin Network': 'wss://westend.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/8710
    },
    text: 'Pichiu',
    ui: {
      logo: nodesKylinPNG
    }
  },
  {
    info: 'westendStandard',
    isDisabled: true,
    paraId: 2094,
    providers: {
      // 'Standard Protocol': 'wss://rpc.westend.standard.tech' // https://github.com/polkadot-js/apps/issues/8525
    },
    text: 'Standard',
    ui: {
      logo: chainsStandardPNG
    }
  },
  {
    info: 'karura',
    isDisabled: true,
    paraId: 2005,
    providers: {
      // 'Acala Foundation': 'wss://karura-westend-rpc.aca-staging.network' // https://github.com/polkadot-js/apps/issues/5830
    },
    text: 'Wendala',
    ui: {
      logo: chainsKaruraSVG
    }
  },
  {
    info: 'whala',
    isDisabled: true,
    paraId: 2013,
    providers: {
      // Phala: 'wss://whala.phala.network/ws' // https://github.com/polkadot-js/apps/issues/6181
    },
    text: 'Whala',
    ui: {
      color: '#03f3f3',
      logo: nodesKhalaSVG
    }
  }
];

export const testParasWestendCommon: EndpointOption[] = [
  {
    info: 'WestendAssetHub',
    isDisabled: true,
    isPeopleForIdentity: true,
    paraId: 1000,
    providers: {
      Dwellir: 'wss://asset-hub-westend-rpc.dwellir.com',
      'Dwellir Tunisia': 'wss://westmint-rpc-tn.dwellir.com',
      IBP1: 'wss://sys.ibp.network/westmint',
      IBP2: 'wss://asset-hub-westend.dotters.network',
      // OnFinality: 'wss://westmint.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9955
      Parity: 'wss://westend-asset-hub-rpc.polkadot.io',
      Stakeworld: 'wss://wnd-rpc.stakeworld.io/assethub'
    },
    relayName: 'westend',
    teleport: [-1],
    text: 'AssetHub',
    ui: {
      color: '#77bb77',
      logo: nodesAssetHubSVG
    }
  },
  {
    info: 'westendBridgeHub',
    isDisabled: true,
    isPeopleForIdentity: true,
    paraId: 1002,
    providers: {
      Dwellir: 'wss://bridge-hub-westend-rpc.dwellir.com',
      'Dwellir Tunisia': 'wss://westend-bridge-hub-rpc-tn.dwellir.com',
      IBP1: 'wss://sys.ibp.network/bridgehub-westend',
      IBP2: 'wss://bridge-hub-westend.dotters.network',
      // OnFinality: 'wss://bridgehub-westend.api.onfinality.io/public-ws', // https://github.com/polkadot-js/apps/issues/9960
      Parity: 'wss://westend-bridge-hub-rpc.polkadot.io'
    },
    relayName: 'westend',
    text: 'BridgeHub',
    ui: {
      logo: nodesBridgeHubSVG
    }
  },
  {
    info: 'westendCollectives',
    isDisabled: true,
    isPeopleForIdentity: true,
    paraId: 1001,
    providers: {
      Dwellir: 'wss://collectives-westend-rpc.dwellir.com',
      'Dwellir Tunisia': 'wss://westend-collectives-rpc-tn.dwellir.com',
      IBP1: 'wss://sys.ibp.network/collectives-westend',
      IBP2: 'wss://collectives-westend.dotters.network',
      Parity: 'wss://westend-collectives-rpc.polkadot.io'
    },
    relayName: 'westend',
    teleport: [-1],
    text: 'Collectives',
    ui: {
      color: '#e6777a',
      logo: 'fa;people-group'
    }
  },
  {
    info: 'westendCoretime',
    paraId: 1005,
    providers: {
      Parity: 'wss://westend-coretime-rpc.polkadot.io'
    },
    teleport: [-1],
    text: 'Coretime',
    ui: {}
  },
  {
    info: 'westendPeople',
    paraId: 1004,
    providers: {
      Parity: 'wss://westend-people-rpc.polkadot.io'
    },
    teleport: [-1],
    text: 'People',
    ui: { }
  }
];

export const testRelayWestend: EndpointOption = {
  dnslink: 'westend',
  genesisHash: WESTEND_GENESIS,
  info: 'westend',
  isDisabled: true,
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...testParasWestendCommon,
    ...testParasWestend
  ],
  providers: {
    // Blockops: 'wss://westend-rpc.blockops.network/ws', // https://github.com/polkadot-js/apps/issues/9840
    Dwellir: 'wss://westend-rpc.dwellir.com',
    'Dwellir Tunisia': 'wss://westend-rpc-tn.dwellir.com',
    IBP1: 'wss://rpc.ibp.network/westend',
    IBP2: 'wss://westend.dotters.network',
    // LuckyFriday: 'wss://rpc-westend.luckyfriday.io', // https://github.com/polkadot-js/apps/issues/10728
    OnFinality: 'wss://westend.api.onfinality.io/public-ws',
    Parity: 'wss://westend-rpc.polkadot.io',
    RadiumBlock: 'wss://westend.public.curie.radiumblock.co/ws',
    Stakeworld: 'wss://wnd-rpc.stakeworld.io',
    'light client': 'light://substrate-connect/westend'
  },
  teleport: getTeleports(testParasWestendCommon),
  text: 'Westend',
  ui: {
    color: '#da68a7',
    identityIcon: 'polkadot',
    logo: nodesWestendColourSVG
  }
};
