// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalCerestatsPNG } from '../ui/logos/external/index.js';
import { nodesCereSVG } from '../ui/logos/nodes/index.js';

export default {
  chains: {
    'Cere Mainnet Beta': 'cere'
  },
  create: (_chain: string, path: string, data: BN | number | string): string =>
    `https://stats.cere.network/${path}/${data.toString()}`,
  isActive: true,
  logo: externalCerestatsPNG as string,
  paths: {
    address: 'account',
    block: 'block',
    validator: 'validator'
  },
  url: 'https://stats.cere.network',
  homepage: 'https://https://cere.network/',
  ui: {
    color: '#B7AEFF',
    logo: nodesCereSVG
  }
};
