// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// anything for a specific chain, most would probably fit into the node category (but allow for chain-specific)
// alphabetical
import { sanitize } from '../util';
import chainAcala from './chains/acala.svg';
import chainAleph from './chains/aleph.svg';
import chainAltair from './chains/altair.svg';
import chainAmplitude from './chains/amplitude.svg';
import chainAstar from './chains/astar.png';
import chainBitgreen from './chains/bitgreen.png';
import chainBrainstorm from './chains/brainstorm.png';
import chainCoinversation from './chains/coinversation.png';
import chainCompetitorsClub from './chains/competitors-club.png';
import chainComposableFinance from './chains/composableFinance.png';
import chainCreditcoin from './chains/creditcoin.png';
import chainCreditcoinTest from './chains/creditcoin-test.png';
import chainCrownSterling from './chains/crown-sterling.png';
import chainRococoDali from './chains/dali.png';
import chainRoccoDataHighway from './chains/datahighway.png';
import chainDorafactory from './chains/dorafactory.png';
import chainEfinity from './chains/efinity.svg';
import chainEquilibrium from './chains/equilibrium.svg';
import chainGeminis from './chains/geminis.png';
import chainGenshiro from './chains/genshiro.svg';
import chainGM from './chains/gm.png';
import chainHydrate from './chains/hydrate.png';
import chainInterlay from './chains/interlay.svg';
import chainKarura from './chains/karura.svg';
import chainKico from './chains/kico.png';
import chainKintsugi from './chains/kintsugi.png';
import chainKusama from './chains/kusama-128.gif';
import chainListen from './chains/listen.png';
import chainLogion from './chains/logion.png';
import chainMangata from './chains/mangatax.svg';
import chainMoonsamaDevelopment from './chains/moonsama.png';
import chainMyriad from './chains/myriad.svg';
import chainOLI from './chains/oli.svg';
import chainOmniBTC from './chains/omnibtc.svg';
import chainOpal from './chains/opal-logo.png';
import chainOriginTrail from './chains/origintrail.png';
import chainOriginTrailTestnet from './chains/origintrail-testnet.png';
import chainParallel from './chains/parallel.svg';
import chainPicasso from './chains/picasso.svg';
import chainQuartz from './chains/quartz.png';
import chainRococo from './chains/rococo.svg';
import chainRococoContracts from './chains/rococo-contracts.png';
import chainRococoTick from './chains/rococo-tick.svg';
import chainRococoTrack from './chains/rococo-track.svg';
import chainRococoTrick from './chains/rococo-trick.svg';
import chainShiden from './chains/shiden.png';
import chainSkyeKiwi from './chains/skyekiwi.png';
import chainSnakenet from './chains/snakenet.svg';
import chainSnowbridge from './chains/snowbridge.png';
import chainSpanner from './chains/spanner.png';
import chainStandard from './chains/standard.png';
import chainT0rn from './chains/t0rn.png';
import chainKusamaDataHighway from './chains/tanganika.png';
import chainTinker from './chains/tinker.png';
import nodeTotem from './chains/totem.svg';
import chainTuring from './chains/turing.png';
import chainUnique from './chains/unique.svg';
import chainUnorthodox from './chains/unorthodox.png';
import chainVirto from './chains/virto.png';
import chainEggnet from './chains/webb.png';
import chainWestendColl from './chains/westend-collectives.png';
import extensionPolkadotJs from './extensions/polkadot-js.svg';
import externalCommonwealth from './external/commonwealth.png';
import externalDotreasury from './external/dotreasury.svg';
import externalDotScanner from './external/dotscanner.png';
import externalKodaDot from './external/kodadot.png';
import externalPolkaholic from './external/polkaholic.png';
import externalPolkascan from './external/polkascan.png';
import externalPolkassembly from './external/polkassembly.png';
import externalPolkastats from './external/polkastats.png';
import externalSingular from './external/singular.svg';
import externalStatescan from './external/statescan.svg';
import externalSubId from './external/subid.svg';
import externalSubscan from './external/subscan.svg';
import externalSubsquare from './external/subsquare.svg';
import nodeAjuna from './nodes/ajuna.png';
import nodeApron from './nodes/apron.png';
import nodeArctic from './nodes/arctic.png';
import nodeAres from './nodes/ares.png';
import nodeAresGladios from './nodes/ares-gladios.svg';
import nodeAresMars from './nodes/ares-mars.png';
import nodeAresOdyssey from './nodes/ares-odyssey.svg';
import nodeAstar from './nodes/astar.png';
import nodeAutomata from './nodes/automata.png';
import nodeBajun from './nodes/bajun.png';
import nodeBasilisk from './nodes/basilisk.png';
import nodeBeast from './nodes/beast.svg';
import nodeBifrost from './nodes/bifrost.svg';
import nodeCanvas from './nodes/canvas-2.png';
import nodeCentrifuge from './nodes/centrifuge.png';
import nodeCere from './nodes/cere.png';
import nodeCrab from './nodes/crab.svg';
import nodeCrownSterling from './nodes/crown-sterling.png';
import nodeCrust from './nodes/crust.svg';
import nodeCrustMaxwell from './nodes/crust-maxwell.svg';
import nodeCrustParachain from './nodes/crustParachain.svg';
import nodeDaliTestnet from './nodes/dali.png';
import nodeDarwinia from './nodes/darwinia.svg';
import nodeDataHighway from './nodes/datahighway.png';
import nodeDockMainnet from './nodes/dock-mainnet.png';
import nodeDockTestnet from './nodes/dock-testnet.png';
import nodeDolphin from './nodes/dolphin.svg';
import nodeDotMog from './nodes/dotmog.svg';
import nodeEave from './nodes/eave.svg';
import nodeEdgeware from './nodes/edgeware-white.png';
import nodeEfinity from './nodes/efinity.svg';
import nodeEncointer from './nodes/encointer-blue.svg';
import nodeFantour from './nodes/fantour.png';
import nodeGalital from './nodes/galital-logo.png';
import nodeGamePower from './nodes/gamepower.svg';
import nodeGeek from './nodes/geek.svg';
import nodeHanonycash from './nodes/hanonycash.svg';
import nodeHelixstreet from './nodes/helixstreet.png';
import nodeIdavoll from './nodes/idavoll.png';
import nodeImbue from './nodes/imbue.png';
import nodeIntegritee from './nodes/integritee.svg';
import nodeInterBTC from './nodes/interlay.svg';
import nodeIpse from './nodes/ipse.png';
import nodeJaz from './nodes/jaz.png';
import nodeJoystream from './nodes/joystream.svg';
import nodeJupiter from './nodes/jupiter.svg';
import nodeKabocha from './nodes/kabocha.svg';
import nodeKhala from './nodes/khala.svg';
import nodeKilt from './nodes/kilt.png';
import nodeKlug from './nodes/klug.png';
import nodeKonomi from './nodes/konomi.png';
import nodeKulupu from './nodes/kulupu.svg';
import nodeKusari from './nodes/kusari.svg';
import nodeKylin from './nodes/kylin.png';
import nodeLaminar from './nodes/laminar-circle.svg';
import nodeLitentry from './nodes/litentry.png';
import nodeLitmus from './nodes/litmus.png';
import nodeLoomNetwork from './nodes/loom_network.png';
import nodeManta from './nodes/manta.png';
import nodeMath from './nodes/math.svg';
import nodeMinix from './nodes/minix.png';
import moonbase from './nodes/moonbase_alpha.png';
import moonbeam from './nodes/moonbeam.png';
import moonriver from './nodes/moonriver.svg';
import nodeMoonrock from './nodes/moonrock.png';
import moonshadow from './nodes/moonshadow.png';
import mybank from './nodes/mybank.png';
import nodeNFTMart from './nodes/nftmart.png';
import nodeNodle from './nodes/nodle.svg';
import nodeChainOLI from './nodes/oli.svg';
import nodeOmniBTC from './nodes/omnibtc.svg';
import nodeUniqueWestend from './nodes/opal-logo.png';
import nodeOpportunity from './nodes/opportunity.png';
import nodePangolin from './nodes/pangolin.svg';
import nodePangoro from './nodes/pangoro.svg';
import nodeParallel from './nodes/parallel.svg';
import nodeParami from './nodes/parami.png';
import nodePhala from './nodes/phala.svg';
import nodePhoenix from './nodes/phoenix.png';
import nodePichiu from './nodes/pichiu.png';
import nodePioneerNetwork from './nodes/pioneer.png';
import nodePolkadex from './nodes/polkadex.svg';
import nodePolkadot from './nodes/polkadot-circle.svg';
import nodePolkadotJs from './nodes/polkadot-js.svg';
import nodePolkaFoundry from './nodes/polkafoundry.svg';
import nodePolkaSmith from './nodes/polkasmith.svg';
import nodePolymesh from './nodes/polymesh.svg';
import nodePontem from './nodes/pontem.svg';
import nodePrism from './nodes/prism.png';
import nodeQuartz from './nodes/quartz.png';
import nodeRealis from './nodes/realis.png';
import nodeRiochain from './nodes/riochain.svg';
import nodeRobonomics from './nodes/robonomics.svg';
import nodeSakura from './nodes/sakura.svg';
import nodeShadow from './nodes/shadow.svg';
import nodeShell from './nodes/shell.svg';
import nodeSherpax from './nodes/sherpax.png';
import nodeSingLavender from './nodes/singlavender.svg';
import nodeSnow from './nodes/snow.png';
import nodeSoonsocial from './nodes/soonsocial.png';
import nodeSoonsocialX from './nodes/soonsocialX.png';
import nodeSora from './nodes/sora-substrate.svg';
import nodeStafi from './nodes/stafi.png';
import nodeStatemine from './nodes/statemine.svg';
import nodeSubDAO from './nodes/subdao.png';
import nodeSubGame from './nodes/subgame.svg';
import nodeSubsocial from './nodes/subsocial.svg';
import nodeSubsocialX from './nodes/subsocialX.svg';
import nodeSubspace from './nodes/subspace.png';
import nodeSubstrateContractsNode from './nodes/substrate-contracts-node.png';
import nodeSubstrate from './nodes/substrate-hexagon.svg';
import nodeSwapdex from './nodes/swapdex.svg';
import nodeTernoa from './nodes/ternoa.svg';
import nodeTrustBase from './nodes/trustbase.png';
import nodeUniarts from './nodes/uniarts.png';
import nodeUnique from './nodes/unique.svg';
import nodeUnitv from './nodes/unitv.png';
import nodeVln from './nodes/valiu.png';
import nodeWeb3games from './nodes/web3games.svg';
import nodeWestend from './nodes/westend_colour.svg';
import nodeWestlake from './nodes/westlake.png';
import nodeWhala from './nodes/whala.svg';
import nodeZCloak from './nodes/zCloak.svg';
import nodeZeitgeist from './nodes/zeitgeist.png';
import nodeZenlink from './nodes/zenlink.svg';
import nodeZero from './nodes/zero.svg';
import emptyLogo from './empty.svg';
// last-resort fallback, just something empty

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via system.chain RPC
export const chainLogos: Record<string, unknown> = [
  ['darwinia crab', nodeCrab],
  ['cere', nodeCere],
  ['Dusty', chainDusty],
  ['Galois', nodeMath],
  ['Kusama', chainKusama], // new name after CC3
  ['Kusama CC1', chainKusama],
  ['Kusama CC2', chainKusama],
  ['Kusama CC3', chainKusama],
  ['Moonbase Alpha', moonbeam],
  ['PolkaBTC', nodePolkaBTC],
  ['Polkadex Testnet', nodePolkadex],
  ['Rococo', chainRococo],
  ['Tick', chainRococoTick],
  ['Track', chainRococoTrack],
  ['Trick', chainRococoTrick],
  ['Uniarts', nodeUniarts]
].reduce((logos, [chain, logo]): Record<string, unknown> => ({
  ...logos,
  [sanitize(chain)]: logo
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via system.name RPC
export const nodeLogos: Record<string, unknown> = [
  ['Acala Node', nodeAcala],
  ['mandala node', nodeAcala],
  ['airalab-robonomics', nodeRobonomics],
  ['Bifrost Node', nodeBifrost],
  ['Bifrost', nodeBifrost],
  ['Canvas Node', nodeCanvas],
  ['centrifuge chain', nodeCentrifuge],
  ['Centrifuge Chain Node', nodeCentrifuge],
  ['darwinia crab', nodeCrab],
  ['cere', nodeCere],
  ['crust', nodeCrust],
  ['darwinia', nodeDarwinia],
  ['darwinia parachain', nodeDarwinia],
  ['Dock Full Node', nodeDockMainnet],
  ['Edgeware Node', nodeEdgeware],
  ['Encointer Node', nodeEncointerNotee],
  ['Encointer Node noTEE', nodeEncointerNotee],
  ['Encointer Node TEE proxy', nodeEncointerTeeproxy],
  ['Galois', nodeMath],
  ['hanonycash', nodeHanonycash],
  ['Jupiter Node', nodeJupiter],
  ['KILT Node', nodeKilt],
  ['kulupu', nodeKulupu],
  ['Laminar Node', nodeLaminar],
  ['node-template', nodeSubstrate],
  ['Nodle Chain Node', nodeNodle],
  ['Polkadex Node', nodePolkadex],
  ['parity-polkadot', nodePolkadot],
  ['Plasm', nodePlasm],
  ['Plasm Node', nodePlasm],
  ['Plasm Parachain Collator', nodePlasm],
  ['phala-substrate-node', nodePhala],
  ['polkadot-js', nodePolkadotJs],
  ['SORA-staging Node', nodeSora],
  ['Stafi Node', nodeStafi],
  ['Stafi', nodeStafi],
  ['subsocial-node', nodeSubsocial],
  ['substrate-node', nodeSubstrate],
  ['Equilibrium Node', nodeEquilibrium],
  ['Equilibrium', nodeEquilibrium],
  ['SUBZΞRO', nodeZero],
  ['Uniarts', nodeUniarts]
].reduce((logos, [node, logo]): Record<string, unknown> => ({
  ...logos,
  [sanitize(spec)]: logo
}), {});

// Alphabetical overrides when we pass an explicit logo name
// NOTE: Matches with what is defined as "info" in settings/endpoints.ts
// (Generally would be the 'network' key in the known ss58 as per
// https://github.com/polkadot-js/common/blob/master/packages/networks/src/index.ts)
export const namedLogos: Record<string, unknown> = {
  acala: chainAcala,
  ajuna: nodeAjuna,
  aleph: chainAleph,
  alexander: nodePolkadot,
  altair: chainAltair,
  amplitude: chainAmplitude,
  arctic: nodeArctic,
  'Ares Gladios': nodeAresGladios,
  'Ares Odyssey': nodeAresOdyssey,
  astar: chainAstar,
  automata: nodeAutomata,
  'automata-contextfree': nodeAutomata,
  bajun: nodeBajun,
  basilisk: nodeBasilisk,
  beast: nodeBeast,
  bifrost: nodeBifrost,
  canvas: nodeCanvas,
  centrifuge: nodeCentrifuge,
  cere: nodeCere,
  crab: nodeCrab,
  creditcoin: chainCreditcoin,
  'creditcoin-testnet': chainCreditcoinTest,
  'crown-sterling': chainCrownSterling,
  crust: nodeCrust,
  'Crust Maxwell': nodeCrustMaxwell,
  'Crust Testnet': nodeCrustParachain,
  crustParachain: nodeCrustParachain,
  'Dali Testnet (Rococo Relay)': chainRococoDali,
  DaliTestnet: nodeDaliTestnet,
  darwinia: nodeDarwinia,
  datahighway: nodeDataHighway,
  'dock-pos-mainnet': nodeDockMainnet,
  'dock-pos-testnet': nodeDockTestnet,
  dolphin: nodeDolphin,
  dorafactory: chainDorafactory,
  dotmog: nodeDotMog,
  eave: nodeEave,
  edgeware: nodeEdgeware,
  efinity: nodeEfinity,
  Eggnet: chainEggnet,
  empty: emptyLogo,
  encointer: nodeEncointer,
  equilibrium: chainEquilibrium,
  fantour: nodeFantour,
  galital: nodeGalital,
  galois: nodeMath,
  gamepower: nodeGamePower,
  geek: nodeGeek,
  geminis: chainGeminis,
  genshiro: chainGenshiro,
  gm: chainGM,
  halongbay: nodePolkaFoundry,
  hanonycash: nodeHanonycash,
  heiko: chainParallel,
  helixstreet: nodeHelixstreet,
  hydra: chainSnakenet,
  idavoll: nodeIdavoll,
  imbue: nodeImbue,
  integritee: nodeIntegritee,
  interlay: chainInterlay,
  'interlay-testnet': chainInterlay,
  ipse: nodeIpse,
  jaz: nodeJaz,
  joystream: nodeJoystream,
  jupiter: nodeJupiter,
  kabocha: nodeKabocha,
  kapex: nodeTotem,
  karura: chainKarura,
  kerria: nodeParallel,
  khala: nodeKhala,
  kico: chainKico,
  kilt: nodeKilt,
  kintsugi: chainKintsugi,
  'kintsugi-testnet': chainKintsugi,
  klugdossier: nodeKlug,
  kpron: nodeApron,
  kulupu: nodeKulupu,
  kusama: chainKusama,
  kusari: nodeKusari,
  kylin: nodeKylin,
  laminar: nodeLaminar,
  lego: nodeTotem,
  listen: chainListen,
  litentry: nodeLitentry,
  litmus: nodeLitmus,
  logion: chainLogion,
  loomNetwork: nodeLoomNetwork,
  mangata: chainMangata,
  manta: nodeManta,
  mars: nodeAresMars,
  mathchain: nodeMath,
  minix: nodeMinix,
  moonbaseAlpha: moonbase,
  moonbeam,
  moonriver,
  moonrock: nodeMoonrock,
  moonshadow,
  mybank,
  myriad: chainMyriad,
  nftmart: nodeNFTMart,
  nodle: nodeNodle,
  odyssey: nodeAresOdyssey,
  omnibtc: nodeOmniBTC,
  opal: nodeUniqueWestend,
  opportunity: nodeOpportunity,
  'origintrail-parachain': chainOriginTrail,
  pangolin: nodePangolin,
  pangoro: nodePangoro,
  parallel: chainParallel,
  phala: nodePhala,
  phoenix: nodePhoenix,
  picasso: chainPicasso,
  pichiu: nodePichiu,
  polkadex: nodePolkadex,
  polkadot: nodePolkadot,
  polkafoundry: nodePolkaFoundry,
  polkasmith: nodePolkaSmith,
  polymesh: nodePolymesh,
  pontem: nodePontem,
  prism: nodePrism,
  quartz: nodeQuartz,
  realis: nodeRealis,
  riochain: nodeRiochain,
  robonomics: nodeRobonomics,
  rocfinity: nodeEfinity,
  rocky: nodeCrust,
  rococo: chainRococo,
  rococoAcala: chainAcala,
  rococoAmplitude: chainAmplitude,
  rococoApron: nodeApron,
  rococoAres: nodeAres,
  rococoBajun: nodeBajun,
  rococoBasilisk: nodeBasilisk,
  rococoBifrost: nodeBifrost,
  rococoBitCountry: nodeBitCountry,
  rococoBitgreen: chainBitgreen,
  rococoCatalyst: nodeCentrifuge,
  rococoChainX: nodeChainx,
  rococoClover: nodeClover,
  rococoConfti: nodeConfti,
  rococoContracts: chainRococoContracts,
  rococoCrab: nodeCrab,
  rococoCrust: nodeCrust,
  rococoDali: chainRococoDali,
  rococoDarwinia: nodeDarwinia,
  rococoDolphin: nodeDolphin,
  rococoEave: nodeEave,
  rococoEncointer: nodeEncointer,
  rococoGalital: nodeGalital,
  rococoGenshiro: chainGenshiro,
  rococoHelixstreet: nodeHelixstreet,
  rococoHydrate: chainHydrate,
  rococoIdavoll: nodeIdavoll,
  rococoImbue: nodeImbue,
  rococoIntegritee: nodeIntegritee,
  rococoInterBTC: chainInterlay,
  rococoJupiter: nodeJupiter,
  rococoKilt: nodeKilt,
  rococoKonomi: nodeKonomi,
  rococoKylin: nodeKylin,
  rococoLaminar: nodeLaminar,
  rococoPlasm: nodePlasm,
  rococoRobonomics: nodeRobonomics,
  rococoTick: chainRococoTick,
  rococoTrack: chainRococoTrack,
  rococoTrick: chainRococoTrick,
  rococoTrustBase: nodeTrustBase,
  rococoTuring: chainTuring,
  rococoUnitv: nodeUnitv,
  rococoVirto: chainVirto,
  rococoVln: nodeVln,
  rococoZeitgeist: nodeZeitgeist,
  rococoZenlink: nodeZenlink,
  sakura: nodeSakura,
  shadow: nodeShadow,
  shell: nodeShell,
  sherpax: nodeSherpax,
  shibuya: chainShiden,
  shiden: chainShiden,
  singLavender: nodeSingLavender,
  skyekiwi: chainSkyeKiwi,
  snakenet: chainSnakenet,
  snowbridge: chainSnowbridge,
  soonsocial: nodeSoonsocial,
  sora: nodeSora,
  'sora-substrate': nodeSora,
  sora_ksm: nodeSora,
  spanner: chainSpanner,
  stafi: nodeStafi,
  statemine: nodeStatemine,
  statemint: nodeStatemine,
  subdao: nodeSubDAO,
  'SubDAO PC1': nodeSubDAO,
  'SubDAO Staging': nodeSubDAO,
  subgame: nodeSubGame,
  'SubGame Gamma': nodeSubGame,
  'SubGame Staging': nodeSubGame,
  subsocial: nodeSubsocial,
  subsocialX: nodeSubsocialX,
  subspace: nodeSubspace,
  'subspace-farmnet': nodeSubspace,
  'subspace-gemini-1': nodeSubspace,
  substrate: nodeSubstrate,
  substrateContractsNode: nodeSubstrateContractsNode,
  swapdex: nodeSwapdex,
  t0rn: chainT0rn,
  tanganika: chainKusamaDataHighway,
  ternoa: nodeTernoa,
  'ternoa-alphanet': nodeTernoa,
  'ternoa-testnet': nodeTernoa,
  tinker: chainTinker,
  'totem-parachain': nodeTotem,
  trustbase: nodeTrustBase,
  turing: chainTuring,
  uniarts: nodeUniarts,
  unique: nodeUnique,
  unitv: nodeUnitv,
  unorthodox: chainUnorthodox,
  vanilla: nodeParallel,
  vln: nodeVln,
  wapex: nodeTotem,
  web3games: nodeWeb3games,
  westend: nodeWestend,
  westendCollectives: chainWestendColl,
  westendPichiu: nodePichiu,
  westendStandard: chainStandard,
  westlake: nodeWestlake,
  westmint: nodeStatemine,
  whala: nodeWhala,
  zCloak: nodeZCloak,
  zeitgeist: nodeZeitgeist,
  zero: nodeZero
};

// extension logos
export const extensionLogos: Record<string, unknown> = {
  'polkadot-js': extensionPolkadotJs
};

// external logos, i.e. for explorers
export const externalLogos: Record<string, unknown> = {
  commonwealth: externalCommonwealth,
  dotreasury: externalDotreasury,
  dotscanner: externalDotScanner,
  kodadot: externalKodaDot,
  polkaholic: externalPolkaholic,
  polkascan: externalPolkascan,
  polkassembly: externalPolkassembly,
  polkastats: externalPolkastats,
  singular: externalSingular,
  statescan: externalStatescan,
  subid: externalSubId,
  subscan: externalSubscan,
  subsquare: externalSubsquare
};

// empty logos
export const emptyLogos: Record<string, unknown> = {
  empty: emptyLogo
};

// preload all
[chainLogos, extensionLogos, externalLogos, namedLogos, nodeLogos, emptyLogos].forEach((imageSet): void => {
  Object.values(imageSet).forEach((src): void => {
    new Image().src = src as string;
  });
});
