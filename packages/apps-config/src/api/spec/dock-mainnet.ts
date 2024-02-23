// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import { spec } from '@docknetwork/node-types';

export default (spec as { 'dock-main-runtime': OverrideBundleDefinition })['dock-main-runtime'];
