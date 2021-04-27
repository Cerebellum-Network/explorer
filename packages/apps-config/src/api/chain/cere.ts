// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

// For the network after ERC20 integrated
export default {
  ChainId: "u8",
  DepositNonce: "u64",
  ResourceId: "[u8; 32]",
  ProposalStatus: {
    _enum: ['Initiated', 'Approved', 'Rejected']
  },
  ProposalVotes: {
    votes_for: "Vec<AccountId>",
    votes_against: "Vec<AccountId>",
    status: "ProposalStatus",
    expiry: "BlockNumber"
  },
  TokenId: "u256",
  Erc721Token: {
    id: "TokenId",
    metadata: "Vec<u8>"
  },
  Address: "AccountId",
  LookupSource: "AccountId"
};

// For the network before ERC20 integrated
// export default {
//   ChainId: "u8",
//   ResourceId: "[u8; 32]",
//   DepositNonce: "u64",
//   TokenId: "U256"
// };
