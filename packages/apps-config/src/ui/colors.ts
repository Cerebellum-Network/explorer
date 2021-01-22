// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

import nodeBasiliskRococo from './logos/nodes/basilisk-rococo-bg.png';
import { sanitize } from './util';

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// defaults
const emptyColor = '#99999';

// based on chain name
// alphabetical
const chainCrab = '#7C30DD';
const chainCrust = '#ff8812';
const chainCrustMaxwell = '#2E333B';
const chainClover = 'linear-gradient(to right, #52ad75, #7cc773)';
const chainChainx = '#F6C94A';
const chainDarwinia = '#FF0083';
const chainDali = '#000000';
const chainDolphin = '#000000';
const chainDorafactory = '#FF761C';
const chainDotMog = '#020609';
const chainEfinity = '#496ddb';
const chainEquilibrium = '#1792ff';
const chainFantour = '#5a189a';
const chainGalital = '#00063F';
const chainGalois = '#000000';
const chainGamePower = '#5d21a5';
const chainGenshiro = '#e8662d';
const chainGM = '#f47b36';
const chainHanonycash = '#0099CC';
const chainHeiko = '#42d5de';
const chainHydrate = '#000000';
const chainIdavoll = '#ff43ff';
const chainImbue = '#baff36';
const chainInterbtc = '#1a0a2d';
const chainInterlay = '#3E96FF';
const chainIpse = '#08a1e8';
const chainJupiter = '#7143ff';
const chainKarura = '#ff4c3b';
const chainKhala = '#03f3f3';
const chainKintsugi = '#1a0a2d';
const chainKlug = '#000000';
const chainKulupu = '#003366';
const chainKico = '#29B58D';
const chainKilt = '#8c145a';
const chainKiltDev = '#f05a27';
const chainKiltPeregrine = `linear-gradient(45deg, ${chainKiltDev} 0%, ${chainKilt} 100%)`;
const chainKiltRilt = `linear-gradient(45deg, ${chainKilt} 0%, ${chainKiltDev} 100%)`;
const chainKonomi = '#007aff';
const chainKusama = '#000000';
const chainKusamaDataHighway = 'linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)';
const chainKusari = '#b8860b';
const chainKylin = '#ed007e';
const chainListen = '#FFAD0A';
const chainLitentry = 'linear-gradient(45deg, #5cc27c 0%, #6de98f 100%)';
const chainLitentryRococo = '#0a6a08';
const chainLitmus = '#6822fb';
const chainLogion = 'rgb(21, 38, 101)';
const chainMinix = '#5152f7';
const chainManta = '#2070a6';
const chainMangata = '#030408';
const chainMoonrock = '#3d1d5a';
const chainMoonsama = '#000000';
const chainMybank = '#282736';
const chainMyriad = '#7342CC';
const chainNFTMart = '#815287';
const chainNodle = '#1ab394';
const chainOLI = '#8CC63F';
const chainOmniBTC = '#6759E9';
const chainOpal = '#3B9C9D';
const chainOriginTrail = '#FB5DEB';
const chainOriginTrailTestnet = '#0C0C0C';
const chainPangolin = '#4B30DD';
const chainPangoro = '#4B30DD';
const chainParallel = '#ef18ac';
const chainParami = '#ee06e2';
const chainPicasso = '#000000';
const chainPichiu = '#ed007e';
const chainPhala = '#c6fa4c';
const chainPhoenix = '#d42181';
const chainPolkadex = '#7C30DD';
const chainPolkadot = '#e6007a';
const chainPolkaFoundry = '#ff527c';
const chainPolkaSmith = '#0DDDFB';
const chainPontem = '#A92FAC';
const chainPrism = 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
const chainQuartz = '#FF4D6A';
const chainRocco = '#6f36dc';
const chainRoccoAcala = '#173DC9';
const chainRoccoBifrost = '#002cc3';
const chainRoccoDarwinia = '#7C30DD';
const chainRococoLaminar = '#004FFF';
const chainRoccoTick = '#22bb22';
const chainRoccoTrack = '#bb2222';
const chainRoccoTrick = '#2222bb';
const chainRiochain = '#4d87f6';
const chainSakura = '#ff5995';
const chainShadow = '#ffa940';
const chainShiden = '#5923B2';
const chainSkyeKiwi = '#6667ab';
const chainSnakenet = '#f653a2';
const chainSora = '#2D2926';
const chainSpanner = '#EC3D3D';
const chainStandard = 'background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(42,170,244,1) 35%, rgba(10,10,10,1) 100%)';
const chainSwapdex = '#E94082';
const chainSubDAO = 'linear-gradient(50deg, #F20092 0%, #FF4D5D 100%)';
const chainTinker = '#161616';
const chainTotem = 'linear-gradient(158deg, rgba(226,157,0,1) 0%, rgba(234,55,203,1) 100%)';
const chainTrustBase = '#ff43aa';
const chainTuring = '#A8278C';
const chainT0rn = '#212322';
const chainUniarts = 'linear-gradient(150deg, #333ef7 0%, #55adff 100%)';
const chainUnique = '#40BCFF';
const chainUnitv = '#1452F0';
const chainUnorthodox = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(42,244,187,1) 35%, rgba(10,10,10,1) 100%)';
const chainVirto = '#063970';
const chainVln = '#33cc33';
const chainWeb3games = '#000000';
const chainWestend = '#da68a7';
const chainWestlake = 'linear-gradient(-90deg, #9400D3 0%, #5A5CA9 50%, #00BFFF 100%)';
const chainWhala = '#03f3f3';
const chainZero = '#000000';
const chainZenlink = 'linear-gradient(45deg, #F20082 0%, #FF4D4D 100%)';
const chainCESS = '#2269a9';
// based on node name
// alphabetical
const nodeBifrost = '#002cc3';
const nodeCanvas = '#c77cff';
const nodeCentrifuge = '#fcc367';
const nodeCere = '#b7aeff';
const nodeEdgeware = '#0a95df';
const nodeEncointerNotee = '#cc0000';
const nodeEncointerTeeproxy = '#0000cc';
const nodeEquilibrium = '#1792ff';
const nodeJupiter = '#7143ff';
const nodeKabocha = '#f53485';
const nodeKonomi = '#007aff';
const nodeKpron = 'linear-gradient(45deg, #0099F7 0%, #2E49EB 100%)';
const nodeKylin = '#ed007e';
const nodeKlug = '#663399';
const nodeKusari = '#b8860b';
const nodeLitentry = 'linear-gradient(45deg, #5cc27c 0%, #6de98f 100%)';
const nodeManta = '#2070a6';
const nodeMathChain = '#000000';
const nodeMoonbeam = '#53cbc9';
const nodeMoonbase = '#F45B5B';
const nodeMoonriver = '#0E132E';
const nodeMybank = '#282736';
const nodeNFTMart = '#307182';
const nodeNodle = '#1ab394';
const nodeOdyssey = '#1295F0';
const nodeOmniBTC = '#6759E9';
const nodeOpportunity = '#6143bc';
const nodePangolin = '#4B30DD';
const nodePangoro = '#4B30DD';
const nodeParallel = '#ef18ac';
const nodeParami = '#ee06e2';
const nodePichiu = '#ed007e';
const nodePolkadex = '#7C30DD';
const nodePolymesh = '#1348e4';
const nodePontem = '#A92FAC';
const nodePrism = 'linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
const nodeRealis = '#000000';
const nodeRiochain = '#1A3BB3';
const nodeRobonomics = '#2949d3';
const nodeSora = '#2D2926';
const nodeStafi = '#00F3AB';
const nodeSubDAO = 'linear-gradient(50deg, #F20092 0%, #FF4D5D 100%)';
const nodeSubsocial = '#b9018c';
const nodeSubsocialX = '#69058C';
const nodeSubspace = '#562b8e';
const nodeSwapdex = '#E94082';
const nodeTernoa = '#d622ff';
const nodeUniarts = chainUniarts;
const nodeUnique = chainUnique;
const nodeOpal = chainOpal;
const nodeWeb3games = '#000000';
const nodeWestlake = chainWestlake;
const nodeZeitgeist = 'linear-gradient(180deg, rgba(32,90,172,1) 0%, rgba(26,72,138,1) 50%, rgba(13,36,69,1) 100%)';
const nodeZero = '#0099cc';
const nodeZenlink = 'linear-gradient(45deg, #F20082 0%, #FF4D4D 100%)';
const nodeSubGame = '#EB027D';
const nodeZCloak = 'linear-gradient(to right, #E89A76 0%, #C5B8CC 50%, #B0B4D7 100%)';
const nodeCESS = '#2269a9';

// based on the spec name
const specShell = '#2e86ab'; // '#0596FC';
const specStatemine = '#113911';
const specStatemint = '#86e62a';
const specWestmint = '#77bb77';

export { emptyColor };

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via the system.chain RPC
export const chainColors: Record<string, any> = [
  ['acala mandala pc1', chainRoccoAcala],
  ['acala mandala pc2', chainRoccoAcala],
  ['Bifrost PC1', chainRoccoBifrost],
  ['Darwinia Crab', chainCrab],
  ['crust maxwell cc2', chainCrust],
  ['darwinia cc1', chainDarwinia],
  ['darwinia parachain', chainRoccoDarwinia],
  ['hanonycash', chainHanonycash],
  ['Jupiter Testnet', chainJupiter],
  ['Kulupu', chainKulupu],
  ['Kusama', chainKusama],
  ['Kusama CC1', chainKusama],
  ['Kusama CC2', chainKusama],
  ['Kusama CC3', chainKusama],
  ['laminar turbulence pc1', chainRococoLaminar],
  ['Moonbase Alpha', nodeMoonbeam],
  ['Phala poc 3', chainPhala],
  ['Plasm', chainPlasm],
  ['Plasm PC2', chainPlasm],
  ['PolkaBTC', chainPolkabtc],
  ['Polkadex Testnet', chainPolkadex],
  ['Polkadot', chainPolkadot],
  ['Polkadot CC1', chainPolkadot],
  ['Rococo', chainRocco],
  ['Tick', chainRoccoTick],
  ['Track', chainRoccoTrack],
  ['Trick', chainRoccoTrick],
  ['Westend', chainWestend],
  ['Galois', chainGalois],
  ['ZΞRO Alphaville', chainZero],
  ['Uniarts', chainUniarts]
].reduce((colors, [chain, color]): Record<string, any> => ({
  ...colors,
  [sanitize(node)]: color
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via the system.name RPC
export const nodeColors: Record<string, any> = [
  ['Bifrost Node', nodeBifrost],
  ['Canvas Node', nodeCanvas],
  ['centrifuge chain', nodeCentrifuge],
  ['Centrifuge Chain Node', nodeCentrifuge],
  ['Substrate Node', nodeCere],
  ['edgeware node', nodeEdgeware],
  ['Encointer Node', nodeEncointerNotee],
  ['Encointer Node noTEE', nodeEncointerNotee],
  ['Encointer Node TEE proxy', nodeEncointerTeeproxy],
  ['Equilibrium node', nodeEquilibrium],
  ['Jupiter Node', nodeJupiter],
  ['kilt node', nodeKilt],
  ['nodle chain node', nodeNodle],
  ['Polkadex Node', nodePolkadex],
  ['SORA-staging Node', nodeSora],
  ['Stafi node', nodeStafi],
  ['subsocial node', nodeSubsocial],
  ['SUBZΞRO', nodeZero]
  // ['node template', emptyColor],
  // ['parity polkadot', emptyColor],
  // ['substrate node', emptyColor]
].reduce((colors, [node, color]): Record<string, any> => ({
  ...colors,
  [sanitize(spec)]: color
}), {});
