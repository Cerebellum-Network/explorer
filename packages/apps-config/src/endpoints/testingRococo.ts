// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// Based on history, this will expand so keep it as a singular chunk
export function createRococo (t: TFunction): EndpointOption {
  return {
    dnslink: 'rococo',
    genesisHash: '0x481550b70e974177e83cff4d554cea7166be3eaeb32f020b86542e76968ccd0e',
    info: 'rococo',
    isDisabled: true,
    text: t('rpc.rococo', 'Rococo', { ns: 'apps-config' }),
    providers: {
      Parity: 'wss://rococo-rpc.polkadot.io',
      OnFinality: 'wss://rococo.api.onfinality.io/public-ws',
      'Patract Elara': 'wss://rococo.elara.patract.io'
    },
    linked: [
      // these are the base chains
      {
        info: 'rococoTick',
        paraId: 100,
        isDisabled: true,
        text: t('rpc.rococo.tick', 'Tick', { ns: 'apps-config' }),
        providers: {
          Parity: 'wss://tick-rpc.polkadot.io'
        }
      },
      {
        info: 'rococoTrick',
        paraId: 110,
        isDisabled: true,
        text: t('rpc.rococo.trick', 'Trick', { ns: 'apps-config' }),
        providers: {
          Parity: 'wss://trick-rpc.polkadot.io'
        }
      },
      {
        info: 'rococoTrack',
        paraId: 120,
        isDisabled: true,
        text: t('rpc.rococo.track', 'Track', { ns: 'apps-config' }),
        providers: {
          Parity: 'wss://track-rpc.polkadot.io'
        }
      },
      // add any additional parachains here, alphabetical
      {
        info: 'rococoBifrost',
        paraId: 107,
        isDisabled: true,
        text: t('rpc.rococo.bifrost', 'Bifrost PC1', { ns: 'apps-config' }),
        providers: {
          Bifrost: 'wss://rococo-1.testnet.liebi.com'
        }
      },
      {
        info: 'rococoBitCountry',
        isDisabled: true,
        paraId: 8,
        text: t('rpc.rococo.bitcountry', 'Bit.Country PC1', { ns: 'apps-config' }),
        providers: {
          BitCountry: 'wss://tewai-parachain.bit.country:9955'
        }
      },
      {
        info: 'rococoClover',
        isDisabled: true,
        paraId: 229,
        text: t('rpc.rococo.clover', 'Clover PC1', { ns: 'apps-config' }),
        providers: {
          Clover: 'wss://api-rococo.clover.finance'
        }
      },
      {
        info: 'rococoCrab',
        isDisabled: true,
        paraId: 9,
        text: t('rpc.rococo.crab', 'Darwinia Crab PC2', { ns: 'apps-config' }),
        providers: {
          Darwinia: 'wss://crab-pc2-rpc.darwinia.network'
        }
      },
      {
        info: 'rococoCrust',
        isDisabled: true,
        paraId: 7777,
        text: t('rpc.rococo.crust', 'Crust PC1', { ns: 'apps-config' }),
        providers: {
          Crust: 'wss://api-rococo.crust.network'
        }
      },
      {
        info: 'rococoChainX',
        isDisabled: true,
        paraId: 59,
        text: t('rpc.rococo.chainx', 'ChainX PC1', { ns: 'apps-config' }),
        providers: {
          ChainX: 'wss://sherpax.chainx.org'
        }
      },
      {
        info: 'rococoDataHighway',
        isDisabled: true,
        paraId: 2,
        text: t('rpc.rococo.datahighway', 'DataHighway', { ns: 'apps-config' }),
        providers: {
          DataHighway: 'wss://testnet-harbour.datahighway.com'
        }
      },
      {
        info: 'rococoEncointer',
        paraId: 1862,
        isDisabled: true,
        text: t('rpc.rococo.encointer', 'Encointer PC1', { ns: 'apps-config' }),
        providers: {
          Encointer: 'wss://rococo.encointer.org'
        }
      },
      {
        info: 'rococoHydrate',
        paraId: 82406,
        isDisabled: true,
        text: t('rpc.rococo.hydrate', 'Hydrate', { ns: 'apps-config' }),
        providers: {
          HydraDX: 'wss://hydrate-rpc.hydradx.io:9944'
        }
      },
      {
        info: 'rococoIdavoll',
        paraId: 7766,
        isDisabled: true,
        text: t('rpc.rococo.idavoll', 'Idavoll', { ns: 'apps-config' }),
        providers: {
          Idavoll: 'wss://rococo.idavoll.network'
        }
      },
      {
        info: 'rococoIntegritee',
        paraId: 1983,
        isDisabled: true,
        text: t('rpc.rococo.integritee', 'IntegriTEE PC1', { ns: 'apps-config' }),
        providers: {
          SCS: 'wss://rococo.integritee.network'
        }
      },
      {
        info: 'rococoJupiter',
        paraId: 1,
        isDisabled: true,
        text: t('rpc.rococo.jupiter', 'Patract Jupiter R1', { ns: 'apps-config' }),
        providers: {
          Acala: 'wss://rococo-1.acala.laminar.one/ws'
        }
      },
      {
        info: 'rococoKilt',
        paraId: 12623,
        isDisabled: true,
        text: t('rpc.rococo.kilt', 'KILT PC1', { ns: 'apps-config' }),
        providers: {
          'KILT Protocol': 'wss://para.rococo-v1.kilt.io'
        }
      },
      {
        info: 'rococoPlasm',
        paraId: 5000,
        isDisabled: true,
        text: t('rpc.rococo.plasm', 'Plasm PC2', { ns: 'apps-config' }),
        providers: {
          PlasmNetwork: 'wss://rpc.rococo.plasmnet.io'
        }
      },
      {
        info: 'rococoRobonomics',
        paraId: 3000,
        isDisabled: true,
        text: t('rpc.rococo.robonomics', 'Robonomics PC2', { ns: 'apps-config' }),
        providers: {
          Airalab: 'wss://rococo.parachain.robonomics.network'
        }
      }
    ]
  };
}
