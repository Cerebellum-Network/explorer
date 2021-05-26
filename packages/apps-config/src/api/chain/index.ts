// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Cere from './cere';
import Phala from './phala';

// alphabetical, based on the actual displayed name
export default {
  'Cerebellum Mainnet Alpha': Cere,
  'Cerebellum Mainnet Alpha Stage': Cere,
  'Cerebellum Network Testnet': Cere,
  'Cerebellum Network Testnet Beta': Cere,
  'Cerebellum Testnet': Cere,
  'Cerebellum Devnet': Cere,
  'Local Testnet': Cere, // For Nodes bootstraped from --local chainspec
  'Phala PoC-3': Phala
};
