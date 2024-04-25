import { Config } from '../types';
import contracts from './contracts';
import keys from './keys';
import pools from './pools';
import rateProviders from './rateProviders';
import tokenlists from './tokenlists';
import tokens from './tokens';

const config: Config = {
  key: '80085',
  chainId: 80085,
  chainName: 'Artio',
  name: 'Berachain Artio',
  shortName: 'Artio',
  monorepoName: 'artio',
  slug: 'berachain',
  network: 'artio',
  trustWalletNetwork: 'berachain',
  unknown: false,
  visibleInUI: true,
  testNetwork: false,
  rpc: `https://artio.rpc.berachain.com`,
  ws: ``,
  explorer: 'https://artio.beratrail.io/',
  explorerName: 'Routescan',
  subgraph:
    'https://api.goldsky.com/api/public/project_cluukfpdrw61a01xag6yihcuy/subgraphs/artio/0.0.1/gn',
  balancerApi: 'https://api.balancer.fi',
  poolsUrlV2: '',
  subgraphs: {
    main: [
      'https://api.goldsky.com/api/public/project_cluukfpdrw61a01xag6yihcuy/subgraphs/artio/0.0.1/gn',
    ],
    aave: '',
    gauge: '',
    blocks: '', // @todo: utilize existing goldski blocks subgraph?
  },
  bridgeUrl: '',
  supportsEIP1559: true,
  supportsElementPools: true,
  blockTime: 10, // @todo: confirm block time
  nativeAsset: {
    name: 'BERA',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // @todo: confirm address
    symbol: 'BERA',
    decimals: 18,
    deeplinkId: 'bera',
    logoURI: 'tokens/bera.png', // @todo: add /public/tokens/bera.png
    minTransactionBuffer: '0.05',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'berachain-bera',
      platformId: 'berachain-bera',
    },
  },
  addresses: {
    ...contracts,
  },
  pools,
  tokens,
  keys,
  gauges: {
    // @todo: confirm gauges
    type: 3,
    weight: 0,
  },
  tokenlists,
  rateProviders,
};

export default config;
