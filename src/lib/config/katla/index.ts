import { Config } from '../types';
import keys from './keys';
import contracts from './contracts';
import pools from './pools';
import tokenlists from './tokenlists';
import tokens from './tokens';
import rateProviders from './rateProviders';

const config: Config = {
  key: '167008',
  chainId: 167008,
  layerZeroChainId: 0, // not yet supported at the time of writing
  chainName: 'Taiko Katla',
  name: 'Taiko Katla',
  shortName: 'Katla',
  monorepoName: 'katla',
  slug: 'katla',
  network: 'katla',
  trustWalletNetwork: 'katla',
  unknown: false,
  visibleInUI: true,
  testNetwork: true,
  rpc: `https://taiko-katla.blockpi.network/v1/rpc/public`,
  ws: ``,
  publicRpc: 'https://taiko-katla.blockpi.network/v1/rpc/public',
  explorer: 'https://explorer.katla.taiko.xyz',
  explorerName: 'Taiko Katla Explorer',
  subgraph:
    'https://api.goldsky.com/api/public/project_clukqzumerv2501ych4hc29fb/subgraphs/test-burrbear/0.0.1/gn',
  balancerApi: 'https://api.balancer.fi',
  poolsUrlV2: '',
  subgraphs: {
    main: [
      'https://api.goldsky.com/api/public/project_clukqzumerv2501ych4hc29fb/subgraphs/test-burrbear/0.0.1/gn',
    ],
    aave: 'https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic',
    gauge:
      'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-polygon',
    blocks: 'https://api.thegraph.com/subgraphs/name/ianlapham/polygon-blocks',
  },
  bridgeUrl: 'https://bridge.katla.taiko.xyz/',
  supportsEIP1559: true,
  supportsElementPools: false,
  supportsVeBalSync: true,
  blockTime: 4,
  nativeAsset: {
    name: 'Taiko Token',
    address: '0x0000000000000000000000000000000000001010',
    symbol: 'TKO',
    decimals: 18,
    deeplinkId: 'tko',
    logoURI: 'tokens/matic.svg',
    minTransactionBuffer: '0.1',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'taiko-network',
      platformId: 'taiko-katla',
    },
    apyVision: {
      networkName: 'matic',
    },
  },
  addresses: {
    ...contracts,
  },
  pools,
  tokens,
  keys,
  gauges: {
    type: 4,
    weight: 0,
  },
  tokenlists,
  rateProviders,
};

export default config;
