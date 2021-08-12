// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { validateURL } from '../src/initSettings';

describe('Test validateURL function', () => {
  test.each([
    ['ws://localhost:9944', true],
    ['wss://localhost:9944', true],
    ['ws://127.0.0.1:9944', true],
    ['wss://node-1.cere.network:9944', true],
    ['ws://dev-2.cere.network:9944', true]
  ])('Should return true for %s', (url) => {
    expect(validateURL(url)).toBeTruthy();
  });

  test.each([
    ['ws://127.0.0.2:9944', 'Invalid ws url'],
    ['wss://dev.cere.node.network:9944', 'Invalid ws url'],
    ['wss://cere.network.xyz.com:9944', 'Invalid ws url'],
    ['wss://dev.cere.network:65000', 'Invalid ws port'],
    ['http://node.cere.network:9944', 'Non-prefixed ws/wss url'],
    ['https://node.cere.network:9944', 'Non-prefixed ws/wss url'],
    ['node.cere.network:9944', 'Non-prefixed ws/wss url']
  ])('Should throw error for %s as %s', (url, expected) => {
    expect(() => {
      validateURL(url);
    }).toThrowError(expected);
  });
});
