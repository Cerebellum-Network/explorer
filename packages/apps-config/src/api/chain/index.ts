// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Cere from './cere';
import CereQa from './cereQA';
import Phala from './phala';

// alphabetical, based on the actual displayed name
export default {
  'Cerebellum Devnet': Cere,
  'Cerebellum Ext Devs Network 1': Cere,
  'Cerebellum Ext Devs Network 2': Cere,
  'Cerebellum Ext Devs Network 3': Cere,
  'Cerebellum Ext Devs Network 4': Cere,
  'Cerebellum Ext Devs Network 5': Cere,
  'Cerebellum Mainnet Alpha': Cere,
  'Cerebellum Network Testnet': CereQa,
  'Cerebellum Testnet': Cere,
  'Local Testnet': Cere, // For Nodes bootstraped from --local chainspec
  'Phala PoC-3': Phala
};
