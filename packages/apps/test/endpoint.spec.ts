// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isValidUrl } from '../src/Endpoints/index';

describe('Test isValidUrl function', () => {
  test.each([
    ['ws://localhost:9944', true],
    ['wss://localhost:9944', true],
    ['ws://127.0.0.1:9944', true],
    ['wss://node-1.cere.network:9944', true],
    ['ws://dev-2.cere.network:9944', true]
  ])('Should return true for %s', (url, expected) => {
    expect(isValidUrl(url)).toEqual(expected);
  });

  test.each([
    ['ws://123:9944', false],
    ['http://node.cere.network:9944', false],
    ['https://node.cere.network:9944', false],
    ['node.cere.network:9944', false]
  ])('Should return false for %s', (url, expected) => {
    expect(isValidUrl(url)).toEqual(expected);
  });
});
