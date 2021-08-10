// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { validateURL } from '../src/initSettings';

describe('Test Init Function', () => {
  test('should return URL for ws://localhost:9944', (done) => {
    const result = validateURL('ws://localhost:9944');

    expect(result).toBe('ws://localhost:9944');
    done();
  });

  test('should return URL for ws://127.0.0.1:9944', (done) => {
    const result = validateURL('ws://127.0.0.1:9944');

    expect(result).toBe('ws://127.0.0.1:9944');
    done();
  });

  test('should throw error for ws://localhost:65000', (done) => {
    expect(() => {
      validateURL('ws://localhost:65000');
    }).toThrowError('Invalid ws port');

    done();
  });

  test('should throw error for ws://198.162.1.1:9944', (done) => {
    expect(() => {
      validateURL('ws://198.162.1.1:9944');
    }).toThrowError('Invalid ws url');

    done();
  });

  test('should return URL for ws://dev.cere.network:9944', (done) => {
    const result = validateURL('ws://dev.cere.network:9944');

    expect(result).toBe('ws://dev.cere.network:9944');
    done();
  });

  test('should return URL for wss://dev.cere.network:9944', (done) => {
    const result = validateURL('wss://dev.cere.network:9944');

    expect(result).toBe('wss://dev.cere.network:9944');
    done();
  });

  test('should throw error for wss://cere.dev.network:9944', (done) => {
    expect(() => {
      validateURL('wss://cere.dev.network:9944');
    }).toThrowError('Invalid ws url');

    done();
  });

  test('should throw error for wss://dev.cere.network:65000', (done) => {
    expect(() => {
      validateURL('wss://dev.cere.network:65000');
    }).toThrowError('Invalid ws port');

    done();
  });

  test('should throw error for http://dev.cere.network:65000', (done) => {
    expect(() => {
      validateURL('http://dev.cere.network:65000');
    }).toThrowError('Non-prefixed ws/wss url');

    done();
  });
});
