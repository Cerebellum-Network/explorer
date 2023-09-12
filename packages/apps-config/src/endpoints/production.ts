// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

export * from './productionRelayKusama';
export * from './productionRelayPolkadot';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: EndpointOption[] = [
  {
    info: 'aleph',
    isDisabled: true,
    text: 'Aleph Zero',
    providers: {
      'Aleph Zero Foundation': 'wss://ws.azero.dev'
    }
  },
  {
    info: 'Ares Odyssey',
    isDisabled: true,
    text: 'Ares Odyssey',
    providers: {
      'Ares Protocol': 'wss://odyssey.aresprotocol.io'
    }
  },
  {
    info: 'automata',
    isDisabled: true,
    text: 'Automata',
    providers: {
      'Automata Network': 'wss://api.ata.network',
      OnFinality: 'wss://automata.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'cere',
    text: 'Cere Mainnet',
    providers: {
      'Cere Network': 'wss://archive.mainnet.cere.network/ws',
      'Republic Crypto | Runtime': 'wss://mainnet.cere-archive.republiccrypto-runtime.com:444',
    }
  },
  {
    dnslink: 'centrifuge',
    info: 'centrifuge',
    isDisabled: true,
    text: 'Centrifuge Standalone [Archived]',
    providers: {
      // Centrifuge: 'wss://fullnode.centrifuge.io' // https://github.com/polkadot-js/apps/issues/8012
    }
  },
  {
    info: 'chainx',
    isDisabled: true,
    text: 'ChainX',
    providers: {
      ChainX: 'wss://mainnet.chainx.org/ws'
    }
  },
  {
    info: 'competitors-club',
    isDisabled: true,
    text: 'Competitors Club',
    providers: {
      'Competitors Club': 'wss://node0.competitors.club/wss'
    }
  },
  {
    info: 'creditcoin',
    isDisabled: true,
    text: 'Creditcoin',
    providers: {
      'Creditcoin Foundation': 'wss://rpc.mainnet.creditcoin.network/ws'
    }
  },
  {
    info: 'crown-sterling',
    isDisabled: true,
    text: 'Crown Sterling',
    providers: {
      'Crown Sterling': 'wss://blockchain.crownsterling.io'
    }
  },
  {
    info: 'crust',
    isDisabled: true,
    text: 'Crust Network',
    providers: {
      'Crust Network': 'wss://rpc.crust.network',
      OnFinality: 'wss://crust.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'darwinia',
    isDisabled: true,
    text: 'Darwinia',
    providers: {
      'Darwinia Network': 'wss://rpc.darwinia.network',
      Dwellir: 'wss://darwinia-rpc.dwellir.com'
    }
  },
  {
    info: 'crab',
    isDisabled: true,
    text: 'Darwinia Crab',
    providers: {
      'Darwinia Network': 'wss://crab-rpc.darwinia.network',
      Dwellir: 'wss://darwiniacrab-rpc.dwellir.com',
      OnFinality: 'wss://darwinia-crab.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'dock-pos-mainnet',
    isDisabled: true,
    text: 'Dock',
    providers: {
      'Dock Association': 'wss://mainnet-node.dock.io'
    }
  },
  {
    dnslink: 'edgeware',
    info: 'edgeware',
    isDisabled: true,
    text: 'Edgeware',
    providers: {
      'Commonwealth Labs': 'wss://mainnet.edgewa.re',
      JelliedOwl: 'wss://edgeware.jelliedowl.com',
      OnFinality: 'wss://edgeware.api.onfinality.io/public-ws',
      Dwellir: 'wss://edgeware-rpc.dwellir.com'
    }
  },
  {
    info: 'efinity',
    text: 'Efinity',
    providers: {
      // Efinity: 'wss://rpc.efinity.io' // https://github.com/polkadot-js/apps/pull/6761
    }
  },
  {
    info: 'equilibrium',
    text: 'Equilibrium',
    providers: {
      // Equilibrium: 'wss://node.equilibrium.io' // https://github.com/polkadot-js/apps/issues/7219
    }
  },
  {
    info: 'genshiro',
    isDisabled: true,
    text: 'Genshiro',
    providers: {
      Equilibrium: 'wss://node.genshiro.io'
    }
  },
  {
    info: 'hanonycash',
    text: 'Hanonycash',
    providers: {
      // Hanonycash: 'wss://rpc.hanonycash.com' // https://github.com/polkadot-js/apps/runs/2755409009?check_suite_focus=true
    }
  },
  {
    dnslink: 'kulupu',
    info: 'kulupu',
    isDisabled: true,
    text: 'Kulupu',
    providers: {
      Kulupu: 'wss://rpc.kulupu.corepaper.org/ws'
    }
  },
  {
    info: 'kusari',
    isDisabled: true,
    text: 'Kusari',
    providers: {
      Swapdex: 'wss://ws.kusari.network'
    }
  },
  {
    info: 'logion',
    isDisabled: true,
    text: 'logion Standalone',
    providers: {
      Logion: 'wss://rpc01.logion.network'
    }
  },
  {
    info: 'mathchain',
    isDisabled: true,
    text: 'MathChain',
    providers: {
      MathWallet: 'wss://mathchain-asia.maiziqianbao.net/ws',
      'MathWallet Backup': 'wss://mathchain-us.maiziqianbao.net/ws'
    }
  },
  {
    info: 'minix',
    text: 'MiniX',
    providers: {
      // ChainX: 'wss://minichain-mainnet.coming.chat/ws' // https://github.com/polkadot-js/apps/issues/7182
    }
  },
  {
    info: 'myriad',
    isDisabled: true,
    text: 'Myriad',
    providers: {
      Myriad: 'wss://ws-rpc.myriad.social'
    }
  },
  {
    info: 'neatcoin',
    isDisabled: true,
    text: 'Neatcoin',
    providers: {
      Neatcoin: 'wss://rpc.neatcoin.org/ws'
    }
  },
  {
    info: 'nftmart',
    isDisabled: true,
    text: 'NFTMart',
    providers: {
      NFTMart: 'wss://mainnet.nftmart.io/rpc/ws'
    }
  },
  {
    info: 'nodle',
    isDisabled: true,
    text: 'Nodle',
    providers: {
      // Nodle: 'wss://main3.nodleprotocol.io', // https://github.com/polkadot-js/apps/issues/7652
      // OnFinality: 'wss://nodle.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8013
    }
  },
  {
    info: 'polkadex',
    isDisabled: true,
    text: 'Polkadex',
    providers: {
      'Polkadex Team': 'wss://mainnet.polkadex.trade',
      OnFinality: 'wss://polkadex.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'polymesh',
    isDisabled: true,
    text: 'Polymesh Mainnet',
    providers: {
      Polymath: 'wss://mainnet-rpc.polymesh.network'
    }
  },
  {
    info: 'riochain',
    isDisabled: true,
    text: 'RioChain',
    providers: {
      RioChain: 'wss://node.v1.riochain.io'
    }
  },
  {
    info: 'robonomics',
    text: 'Robonomics',
    providers: {
      // Airalab: 'wss://kusama.rpc.robonomics.network/' // https://github.com/polkadot-js/apps/pull/6761
    }
  },
  {
    info: 'sherpax',
    isDisabled: true,
    text: 'SherpaX',
    providers: {
      ChainX: 'wss://mainnet.sherpax.io'
    }
  },
  {
    info: 'sora-substrate',
    isDisabled: true,
    text: 'SORA',
    providers: {
      'SORA Parliament Ministry of Finance #2': 'wss://mof2.sora.org',
      'SORA Parliament Ministry of Finance': 'wss://ws.mof.sora.org',
      'SORA Parliament Ministry of Finance #3': 'wss://mof3.sora.org',
      // Soramitsu: 'wss://ws.alb.sora.org', // https://github.com/polkadot-js/apps/issues/7786
      OnFinality: 'wss://sora.api.onfinality.io/public-ws'
      // 'SORA Community (Lux8)': 'wss://sora.lux8.net' // https://github.com/polkadot-js/apps/issues/6195
    }
  },
  {
    info: 'spanner',
    text: 'Spanner',
    providers: {
      // Spanner: 'wss://wss.spannerprotocol.com' // https://github.com/polkadot-js/apps/issues/6547
    }
  },
  {
    info: 'stafi',
    isDisabled: true, // Cannot find type ChainId
    text: 'Stafi',
    providers: {
      'Stafi Foundation': 'wss://mainnet-rpc.stafi.io'
    }
  },
  {
    info: 'subgame',
    isDisabled: true,
    text: 'SubGame',
    providers: {
      SubGame: 'wss://mainnet.subgame.org/'
    }
  },
  {
    info: 'subsocial',
    isDisabled: true,
    text: 'Subsocial',
    providers: {
      // DappForce: 'wss://rpc.subsocial.network' // https://github.com/polkadot-js/apps/issues/8046
    }
  },
  {
    info: 'swapdex',
    isDisabled: true,
    text: 'Swapdex',
    providers: {
      Swapdex: 'wss://ws.swapdex.network'
    }
  },
  {
    info: 'ternoa',
    isDisabled: true,
    text: 'Ternoa',
    providers: {
      CapsuleCorp: 'wss://mainnet.ternoa.network'
    }
  },
  {
    info: 'uniarts',
    isDisabled: true,
    text: 'UniArts',
    providers: {
      UniArts: 'wss://mainnet.uniarts.vip:9443'
    }
  },
  {
    info: 'westlake',
    text: 'Westlake',
    providers: {
      // DataHighway: 'wss://westlake.datahighway.com' // https://github.com/polkadot-js/apps/issues/7293
    }
  }
];