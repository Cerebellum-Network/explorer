// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {EndpointOption} from './types.js';

import {
  chains3dpassPNG,
  chainsAlephSVG,
  chainsBittensorPNG,
  chainsCreditcoinPNG,
  chainsDebioSVG,
  chainsEquilibriumSVG,
  chainsFragnovaPNG,
  chainsGenshiroSVG,
  chainsLogionPNG,
  chainsMyriadPNG,
  chainsSpannerPNG,
  chainsVaraSVG
} from '../ui/logos/chains/index.js';
import {
  nodesAresOdysseySVG,
  nodesAutomataPNG,
  nodesCentrifugePNG,
  nodesChainxSVG,
  nodesCompetitorsClubPNG,
  nodesCrownSterlingPNG,
  nodesCrustSVG,
  nodesDarwiniaSVG,
  nodesDatahighwayPNG,
  nodesDockPNG,
  nodesEdgewareWhitePNG,
  nodesEfinitySVG,
  nodesHanyonycashPNG,
  nodesHumanodePNG,
  nodesJoystreamSVG,
  nodesKulupuSVG,
  nodesKusariSVG,
  nodesMathSVG,
  nodesMinixPNG,
  nodesNftmartPNG,
  nodesNodleSVG,
  nodesPolkadexSVG,
  nodesPolymeshSVG,
  nodesRiochainSVG,
  nodesRobonomicsSVG,
  nodesSherpaxPNG,
  nodesSoraSubstrateSVG,
  nodesStafiPNG,
  nodesSubgameSVG,
  nodesSubsocialSVG,
  nodesSwapdexSVG,
  nodesTernoaSVG,
  nodesThebifrostPNG,
  nodesUniartsPNG,
  nodesUnitnetworkPNG,
  nodesCereSVG
} from '../ui/logos/nodes/index.js';

export * from './productionRelayKusama.js';
export * from './productionRelayPolkadot.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: EndpointOption[] = [
  {
    info: 'cere',
    text: 'Cere Mainnet',
    providers: {
      'Cere Network': 'wss://archive.mainnet.cere.network/ws',
      'Republic Crypto | Runtime': 'wss://mainnet.cere-archive.republiccrypto-runtime.com:444',
    },
    ui: {
      color: '#b7aeff',
      logo: nodesCereSVG
    }
  },
];
