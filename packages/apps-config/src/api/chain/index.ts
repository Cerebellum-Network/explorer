// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { typesChain } from '@phala/typedefs';
import Cere from './cere';
import CrustMaxwell from './crust-maxwell';

// alphabetical, based on the actual displayed name
export default {
  ...typesChain,
  'Cere Devnet': Cere,
  'Cere Ext Devs Network 1': Cere,
  'Cere Ext Devs Network 2': Cere,
  'Cere Ext Devs Network 3': Cere,
  'Cere Ext Devs Network 4': Cere,
  'Cere Ext Devs Network 5': Cere,
  'Cere Mainnet Alpha': Cere,
  'Cere QAnet': Cere,
  'Cere Testnet': Cere,
  'Cerebellum Devnet': Cere,
  'Cerebellum Ext Devs Network 1': Cere,
  'Cerebellum Ext Devs Network 2': Cere,
  'Cerebellum Ext Devs Network 3': Cere,
  'Cerebellum Ext Devs Network 4': Cere,
  'Cerebellum Ext Devs Network 5': Cere,
  'Cerebellum Mainnet Alpha': Cere,
  'Cerebellum QAnet': Cere,
  'Cerebellum Testnet': Cere,
  'Crust Maxwell': CrustMaxwell,
  'Local Testnet': Cere, // For Nodes bootstraped from --local chainspec
};
