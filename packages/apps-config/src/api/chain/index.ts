// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Cere from './cere';
import Phala from './phala';

// alphabetical, based on the actual displayed name
export default {
  'Cerebellum Devnet': Cere,
  'Cerebellum Mainnet Alpha': Cere,
  'Cerebellum QAnet': Cere,
  'Cerebellum Testnet': Cere,
  'Local Testnet': Cere, // For Nodes bootstraped from --local chainspec
  'Phala PoC-3': Phala
};
