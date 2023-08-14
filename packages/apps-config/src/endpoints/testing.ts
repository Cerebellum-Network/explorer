// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

export * from './testingRelayRococo';
export * from './testingRelayWestend';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testChains: EndpointOption[] = [
  {
    info: 'ajuna',
    isDisabled: true,
    text: 'Ajuna Testnet',
    providers: {
      'Ajuna Network': 'wss://rpc-test.ajuna.network'
    }
  },
  {
    info: 'aleph',
    isDisabled: true,
    text: 'Aleph Zero Testnet',
    providers: {
      'Aleph Zero Foundation': 'wss://ws.test.azero.dev'
    }
  },
  {
    info: 'nodle',
    text: 'Arcadia',
    providers: {
      // Nodle: 'wss://arcadia1.nodleprotocol.io' // https://github.com/polkadot-js/apps/issues/7652
    }
  },
  {
    info: 'arctic',
    isDisabled: true,
    text: 'Arctic',
    providers: {
      Arctic: 'wss://arctic-rpc.icenetwork.io:9944'
    }
  },
  {
    info: 'Ares Gladios',
    isDisabled: true,
    text: 'Ares Gladios',
    providers: {
      'Ares Protocol': 'wss://gladios.aresprotocol.io'
    }
  },
  {
    info: 'jaz',
    isDisabled: true,
    text: 'Artio Testnet',
    providers: {
      Jaz: 'wss://ws0.jaz.network'
    }
  },
  {
    info: 'automata-contextfree',
    isDisabled: true,
    text: 'Automata ContextFree',
    providers: {
      'Automata Network': 'wss://cf-api.ata.network',
      OnFinality: 'wss://contextfree.api.onfinality.io/public-ws'
    }
  },
  {
    info: 'edgeware',
    text: 'Beresheet',
    providers: {
      // 'Commonwealth Labs': 'wss://beresheet.edgewa.re' // https://github.com/polkadot-js/apps/issues/7982
    }
  },
  {
    info: 'bifrost',
    isDisabled: true,
    text: 'Bifrost Stage Network',
    providers: {
      // Liebi: 'wss://bifrost-rpc.testnet.liebi.com/ws' // https://github.com/polkadot-js/apps/issues/8139
    }
  },
  {
    info: 'bitcountry',
    isDisabled: true,
    text: 'Bit.Country - Metaverse Network',
    providers: {
      'Metaverse Foundation': 'wss://tewai-rpc.bit.country'
    }
  },
  {
    info: 'cere',
    text: 'Cere Testnet',
    providers: {
      'Cere Network': 'wss://archive.testnet.cere.network/ws',
      'Republic Crypto | Runtime': 'wss://testnet.cere-archive.republiccrypto-runtime.com:444'
    }
  },
  {
    info: 'cere',
    text: 'Cere QAnet',
    providers: {
      'Cere Network': 'wss://archive.qanet.cere.network/ws'
    }
  },
  {
    info: 'cere',
    text: 'Cere Devnet',
    providers: {
      'Cere Network': 'wss://archive.devnet.cere.network/ws'
    }
  },
  {
    info: 'cess-testnet',
    isDisabled: true,
    text: 'CESS Testnet',
    providers: {
      CESS: 'wss://testnet-rpc0.cess.cloud/ws/'
    }
  },
  {
    info: 'clover',
    text: 'Clover',
    providers: {
      // Clover: 'wss://api.clover.finance/' // Cannot construct unknown type BridgeNetworks
    }
  },
  {
    // this is also a duplicate as a parachain under Polkadot and live under production -
    // it is either/or, not and
    info: 'coinversation',
    isDisabled: true, // https://github.com/polkadot-js/apps/issues/6635
    text: 'Coinversation',
    providers: {
      Coinversation: 'wss://rpc.coinversation.io/'
    }
  },
  {
    info: 'creditcoin-testnet',
    isDisabled: true,
    text: 'Creditcoin Testnet',
    providers: {
      'Creditcoin Foundation': 'wss://rpc.testnet.creditcoin.network/ws'
    }
  },
  {
    info: 'Crust Maxwell',
    isDisabled: true,
    text: 'Crust Maxwell',
    providers: {
      // 'Crust Network': 'wss://api.crust.network/', // https://github.com/polkadot-js/apps/issues/8060
      // 'DCloud Foundation': 'wss://api.decloudf.com/' // https://github.com/polkadot-js/apps/issues/8060
      // Pinknode: 'wss://rpc.pinknode.io/maxwell/explorer' // https://github.com/polkadot-js/apps/issues/7058
    }
  },
  {
    info: 'datahighway',
    isDisabled: true,
    text: 'Spreehafen',
    providers: {
      MXC: 'wss://spreehafen.datahighway.com'
    }
  },
  {
    info: 'dock-testnet',
    text: 'Dock',
    providers: {
      // 'Dock Association': 'wss://knox-1.dock.io' // https://github.com/polkadot-js/apps/issues/6831
    }
  },
  {
    info: 'dolphin',
    text: 'Dolphin Testnet',
    providers: {
      // 'Dolphin Testnet': 'wss://trillian.dolphin.red' // https://github.com/polkadot-js/apps/issues/7439
    }
  },
  {
    info: 'dotmog',
    isDisabled: true,
    text: 'DOTMog',
    providers: {
      DOTMog: 'wss://mogiway-01.dotmog.com'
    }
  },
  {
    info: 'encointer',
    isDisabled: true,
    text: 'Encointer Gesell',
    providers: {
      'Encointer Association': 'wss://gesell.encointer.org'
    }
  },
  {
    info: 'equilibrium',
    text: 'Equilibrium',
    providers: {
      // Equilibrium: 'wss://testnet.equilibrium.io' // https://github.com/polkadot-js/apps/issues/6250
    }
  },
  {
    info: 'fantour',
    text: 'Fantour',
    providers: {
      // FantourDev: 'wss://test-ws.fantour.io' // https://github.com/polkadot-js/apps/issues/6519
    }
  },
  {
    info: 'substrate',
    text: 'Flaming Fir',
    providers: {
      // Parity: 'wss://substrate-rpc.parity.io' // https://github.com/polkadot-js/apps/issues/5571
    }
  },
  {
    info: 'Galital',
    text: 'Galital PC2',
    providers: {
      // StarkleyTech: 'wss://galital-rpc-testnet.starkleytech.com' // https://github.com/polkadot-js/apps/issues/6721
    }
  },
  {
    info: 'galois',
    isDisabled: true,
    text: 'Galois',
    providers: {
      MathWallet: 'wss://galois-hk.maiziqianbao.net/ws',
      'MathWallet Backup': 'wss://galois.maiziqianbao.net/ws'
    }
  },
  {
    info: 'gamepower',
    text: 'GamePower',
    providers: {
      // GamePower: 'wss://gamepower.io' // https://github.com/polkadot-js/apps/issues/7223
    }
  },
  {
    info: 'geek',
    isDisabled: true,
    text: 'GeekCash',
    providers: {
      'Geek Team': 'wss://testnet.geekcash.org'
    }
  },
  {
    info: 'halongbay',
    text: 'Halongbay Testnet',
    providers: {
      // Halongbay: 'wss://halongbay.polkafoundry.com' // https://github.com/polkadot-js/apps/issues/6871
    }
  },
  {
    info: 'interlay-testnet',
    isDisabled: true,
    text: 'Interlay Testnet',
    providers: {
      Interlay: 'wss://api-testnet.interlay.io/parachain/'
    }
  },
  {
    info: 'brainstorm',
    isDisabled: true,
    text: 'InvArch Brainstorm Testnet',
    providers: {
      // 'InvArch Team': 'wss://brainstorm.invarch.network/' // https://github.com/polkadot-js/apps/issues/8020
    }
  },
  {
    info: 'ipse',
    isDisabled: true, // https://github.com/polkadot-js/apps/issues/6242
    text: 'IPSE',
    providers: {
      'IPSE China': 'wss://testnet-china.ipse.io',
      'IPSE USA': 'wss://testnet-usa.ipse.io',
      'IPSE Europe': 'wss://testnet-europe.ipse.io'
    }
  },
  {
    info: 'joystream',
    isDisabled: true,
    text: 'Joystream',
    providers: {
      Jsgenesis: 'wss://rpc.joystream.org:9944'
    }
  },
  {
    info: 'jupiter',
    text: 'Jupiter',
    providers: {
      // Patract: 'wss://ws.jupiter-poa.patract.cn' // https://github.com/polkadot-js/apps/issues/7765
    }
  },
  {
    info: 'khala',
    text: 'Khala (Para 3)',
    providers: {
      // 'Phala Network': 'wss://pc-test-3.phala.network/khala/ws' // https://github.com/polkadot-js/apps/issues/6930
    }
  },
  {
    info: 'kilt',
    isDisabled: true,
    text: 'KILT Mashnet',
    providers: {
      'KILT Protocol': 'wss://full-nodes.kilt.io:9944/'
    }
  },
  {
    info: 'kilt',
    isDisabled: true,
    text: 'KILT Peregrine',
    providers: {
      'KILT Protocol': 'wss://peregrine.kilt.io/parachain-public-ws/'
    }
  },
  {
    info: 'kintsugi-testnet',
    isDisabled: true,
    text: 'Kintsugi Testnet',
    providers: {
      Interlay: 'wss://api-dev-kintsugi.interlay.io/parachain'
    }
  },
  {
    info: 'klugdossier',
    isDisabled: true,
    text: 'Klug Dossier',
    providers: {
      // 'Klug Dossier': 'wss://klugdossier.net/' // https://github.com/polkadot-js/apps/issues/8081
    }
  },
  {
    info: 'kylin',
    text: 'Kylin Testnet',
    providers: {
      // 'Kylin Network': 'wss://testnet.kylin-node.co.uk' // https://github.com/polkadot-js/apps/issues/6635
    }
  },
  {
    info: 'litentry',
    isDisabled: true,
    text: 'Litentry Testnet',
    providers: {
      Litentry: 'wss://testnet.litentry.io'
    }
  },
  {
    info: 'logion',
    isDisabled: true,
    text: 'logion Para Testnet',
    providers: {
      Logion: 'wss://chimay.logion.network'
    }
  },
  {
    info: 'logion',
    isDisabled: true,
    text: 'logion Standalone Testnet',
    providers: {
      Logion: 'wss://test-rpc01.logion.network'
    }
  },
  {
    info: 'acala',
    isDisabled: true,
    text: 'Mandala',
    providers: {
      Acala: 'wss://mandala.polkawallet.io'
      // OnFinality: 'wss://acala-mandala.api.onfinality.io/public-ws' // https://github.com/polkadot-js/apps/issues/8105
    }
  },
  {
    info: 'manta',
    text: 'Manta Testnet',
    providers: {
      // 'Manta Testnet': 'wss://ws.f1.testnet.manta.network' // https://github.com/polkadot-js/apps/issues/6384
    }
  },
  {
    info: 'minix',
    isDisabled: true,
    text: 'MiniX Testnet',
    providers: {
      // Chainx: 'wss://minichain.coming.chat/ws' // https://github.com/polkadot-js/apps/issues/8132
    }
  },
  {
    info: 'moonbaseAlpha',
    isDisabled: true,
    text: 'Moonbase Alpha',
    providers: {
      'Moonbeam Foundation': 'wss://wss.api.moonbase.moonbeam.network',
      Blast: 'wss://moonbase-alpha.public.blastapi.io',
      OnFinality: 'wss://moonbeam-alpha.api.onfinality.io/public-ws',
      Pinknode: 'wss://public-rpc.pinknode.io/alphanet'
    }
  },
  {
    info: 'mybank',
    text: 'mybank.network',
    providers: {
      // MYBANK: 'wss://mybank.network/substrate' // https://github.com/polkadot-js/apps/issues/5845
    }
  },
  {
    info: 'nftmart',
    isDisabled: true,
    text: 'NFTMart',
    providers: {
      NFTMartDev: 'wss://dev-ws.nftmart.io',
      NFTMartStaging: 'wss://staging-ws.nftmart.io'
    }
  },
  {
    info: 'opal',
    isDisabled: true,
    text: 'OPAL by UNIQUE',
    providers: {
      'Geo Load Balancer': 'wss://ws-opal.unique.network',
      Europe: 'wss://eu-ws-opal.unique.network',
      'North America': 'wss://us-ws-opal.unique.network',
      Asia: 'wss://asia-ws-opal.unique.network'
    }
  },
  {
    info: 'opportunity',
    text: 'Opportunity',
    providers: {
      // 'Standard Protocol': 'wss://rpc.opportunity.standard.tech' // https://github.com/polkadot-js/apps/issues/7982
    }
  },
  {
    info: 'pangolin',
    isDisabled: true,
    text: 'Pangolin',
    providers: {
      'Darwinia Network': 'wss://pangolin-rpc.darwinia.network'
    }
  },
  {
    info: 'pangoro',
    isDisabled: true,
    text: 'Pangoro',
    providers: {
      'Darwinia Network': 'wss://pangoro-rpc.darwinia.network'
    }
  },
  {
    info: 'phala',
    isDisabled: true,
    text: 'Phala (PoC 5)',
    providers: {
      'Phala Network': 'wss://poc5.phala.network/ws'
    }
  },
  {
    info: 'phoenix',
    text: 'Phoenix Mashnet',
    providers: {
      // 'phoenix Protocol': 'wss://phoenix-ws.coinid.pro/' // https://github.com/polkadot-js/apps/issues/6181
    }
  },
  {
    info: 'pichiu',
    text: 'Pichiu Testnet',
    providers: {
      // 'Kylin Network': 'wss://westend.kylin-node.co.uk' // https://github.com/polkadot-js/apps/pull/6761
    }
  },
  {
    info: 'polkadex',
    isDisabled: true,
    text: 'Polkadex',
    providers: {
      'Polkadex Team': 'wss://blockchain.polkadex.trade'
    }
  },
  {
    info: 'polymesh',
    isDisabled: true,
    text: 'Polymesh Testnet',
    providers: {
      Polymath: 'wss://testnet-rpc.polymesh.live'
    }
  },
  {
    info: 'pontem',
    isDisabled: true,
    text: 'Pontem',
    providers: {
      // Pontem: 'wss://testnet.pontem.network/ws', // https://github.com/polkadot-js/apps/issues/7652
    }
  },
  {
    info: 'prism',
    text: 'Prism',
    providers: {
      // Prism: 'wss://testnet.psm.link' // https://github.com/polkadot-js/apps/issues/7340
    }
  },
  {
    info: 'realis',
    text: 'Realis.Network',
    providers: {
      // 'Realis.Network': 'wss://rpc.realis.network/' // https://github.com/polkadot-js/apps/issues/7982
    }
  },
  {
    info: 'riochain',
    text: 'RioChain',
    providers: {
      // 'RioChain Staging': 'wss://node.v1.staging.riochain.io' // https://github.com/polkadot-js/apps/issues/6181
    }
  },
  {
    info: 'sherpax',
    isDisabled: true,
    text: 'Sherpax Testnet',
    providers: {
      Chainx: 'wss://sherpax-testnet.chainx.org'
    }
  },
  {
    info: 'shibuya',
    isDisabled: true,
    text: 'Shibuya',
    providers: {
      StakeTechnologies: 'wss://rpc.shibuya.astar.network',
      Dwellir: 'wss://shibuya-rpc.dwellir.com',
      Pinknode: 'wss://public-rpc.pinknode.io/shibuya'
    }
  },
  {
    info: 'skyekiwi',
    isDisabled: true,
    text: 'SkyeKiwi Testnet',
    providers: {
      SkyeKiwi: 'wss://staging.rpc.skye.kiwi'
    }
  },
  {
    info: 'soonsocial',
    isDisabled: true,
    text: 'Soonsocial',
    providers: {
      DappForce: 'wss://testnet.subsocial.network'
    }
  },
  {
    info: 'sora-substrate',
    isDisabled: true,
    text: 'SORA-staging',
    providers: {
      Soramitsu: 'wss://ws.stage.sora2.soramitsu.co.jp'
    }
  },
  {
    info: 'subdao',
    text: 'SubDAO Staging',
    providers: {
      // SubDAO: 'wss://alpha.subdao.org' // https://github.com/polkadot-js/apps/issues/7473
    }
  },
  {
    info: 'subgame',
    text: 'SubGame Staging',
    providers: {
      // SubGame: 'wss://staging.subgame.org' // https://github.com/polkadot-js/apps/issues/7982
    }
  },
  {
    info: 'subspace-farmnet',
    isDisabled: true,
    text: 'Subspace Farmnet',
    providers: {
      // 'Subspace Network': 'wss://farm-rpc.subspace.network/ws' // https://github.com/polkadot-js/apps/issues/8135
    }
  },
  {
    info: 'subspace-gemini-1',
    isDisabled: true,
    text: 'Subspace Gemini 1',
    providers: {
      Europe: 'wss://eu.gemini-1b.subspace.network/ws'
    }
  },
  {
    info: 'subspace-gemini-2a',
    isDisabled: true,
    text: 'Subspace Gemini 2a',
    providers: {
      'Europe 0': 'wss://eu-0.gemini-2a.subspace.network/ws',
      'Europe 1': 'wss://eu-1.gemini-2a.subspace.network/ws',
      'Europe 2': 'wss://eu-2.gemini-2a.subspace.network/ws'
    }
  },
  {
    info: 'subspace',
    isDisabled: true,
    text: 'Subspace Testnet',
    providers: {
      'Subspace Network': 'wss://test-rpc.subspace.network'
    }
  },
  {
    info: 'ternoa-alphanet',
    isDisabled: true,
    text: 'Ternoa Alphanet',
    providers: {
      CapsuleCorp: 'wss://alphanet.ternoa.com'
    }
  },
  {
    info: 'ternoa-testnet',
    isDisabled: true,
    text: 'Ternoa Testnet',
    providers: {
      CapsuleCorp: 'wss://testnet.ternoa.com/'
    }
  },
  {
    info: 'laminar',
    isDisabled: true,
    text: 'Turbulence',
    providers: {
      // Laminar: 'wss://testnet-node-1.laminar-chain.laminar.one/ws' // https://github.com/polkadot-js/apps/issues/8060
    }
  },
  {
    info: 'uniarts',
    isDisabled: true,
    text: 'UniArts',
    providers: {
      UniArts: 'wss://testnet.uniarts.network'
    }
  },
  {
    info: 'unique',
    text: 'Unique',
    providers: {
      // Unique: 'wss://testnet2.unique.network' // https://github.com/polkadot-js/apps/issues/7621
    }
  },
  {
    info: 'unitv',
    text: 'Unit Network',
    providers: {
      // 'Unit Network': 'wss://unitventures.io/' // https://github.com/polkadot-js/apps/issues/5684
    }
  },
  {
    info: 'vodka',
    isDisabled: true,
    text: 'Vodka',
    providers: {
      Vodka: 'wss://vodka.rpc.neatcoin.org/ws'
    }
  },
  {
    info: 'web3games',
    isDisabled: true,
    text: 'Web3Games',
    providers: {
      'Web3Games Foundation 0': 'wss://testnet-rpc-0.web3games.org',
      'Web3Games Foundation 1': 'wss://testnet-rpc-1.web3games.org',
      'Web3Games Foundation 2': 'wss://testnet-rpc-2.web3games.org'
    }
  },
  {
    info: 'zCloak',
    text: 'zCloak-network',
    providers: {
      // 'zCloak Network': 'wss://test1.zcloak.network' // https://github.com/polkadot-js/apps/issues/7408
    }
  },
  {
    info: 'zeitgeist',
    isDisabled: true,
    text: 'Zeitgeist Battery Station',
    providers: {
      Zeitgeist: 'wss://bsr.zeitgeist.pm'
    }
  },
  {
    info: 'zero',
    isDisabled: true,
    text: 'Zero Alphaville',
    providers: {
      ZERO: 'wss://alphaville.zero.io'
    }
  }
];
