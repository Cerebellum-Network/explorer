// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Phala from './phala';
import Cere from './cere';

// alphabetical, based on the actual displayed name
export default {
  'Phala PoC-3': Phala,
  'Cerebellum Network Testnet': Cere,
  'Cerebellum Network Testnet Beta': Cere, // For Substrate cluster
  'Local Testnet': Cere, // For Nodes bootstraped from --local chainspec
};
