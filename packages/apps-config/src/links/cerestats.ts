// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalLogos } from '../ui/logos';

export default {
  chains: {
    'Cere Mainnet Beta': 'cere',
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://stats.cere.network/${path}/${data.toString()}`,
  isActive: true,
  logo: externalLogos.cerestats as string,
  paths: {
    address: 'account',
    block: 'block',
    validator: 'validator'
  },
  url: 'https://stats.cere.network'
};
