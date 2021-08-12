// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isValidUrl } from '../src/Endpoints/index';

describe('Test validateURL function', () => {
  test.each([
    ['ws://localhost:9944', true],
    ['wss://localhost:9944', true],
    ['ws://127.0.0.1:9944', true],
    ['wss://node-1.cere.network:9944', true],
    ['ws://dev-2.cere.network:9944', true]
  ])('Should return true for %s', (url) => {
    expect(isValidUrl(url)).toBeTruthy();
  });

  test.each([
    ['ws://127.0.0.2:9944', false],
    ['wss://dev.cere.node.network:9944', false],
    ['wss://cere.network.xyz.com:9944', false],
    ['wss://dev.cere.network:650000', false],
    ['http://node.cere.network:9944', false],
    ['https://node.cere.network:9944', false],
    ['node.cere.network:9944', false]
  ])('Should return false for %s', (url) => {
    expect(isValidUrl(url)).toBeFalsy();
  });
});
