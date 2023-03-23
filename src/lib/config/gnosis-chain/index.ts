import { Config } from '../types';
import contracts from './contracts';
import pools from './pools';
import tokenlists from './tokenlists';

const config: Config = {
  key: '100',
  chainId: 100,
  chainName: 'Gnosis Chain',
  name: 'Gnosis Chain',
  shortName: 'Gnosis',
  slug: 'gnosis-chain',
  network: 'gnosis-chain',
  unknown: false,
  rpc: 'https://poa-xdai.gateway.pokt.network/v1/lb/91bc0e12a76e7a84dd76189d',
  ws: 'wss://rpc.gnosischain.com/wss',
  publicRpc: 'https://rpc.gnosis.gateway.fm',
  explorer: 'https://gnosisscan.io',
  explorerName: 'Gnosisscan',
  balancerApi: 'https://api.balancer.fi',
  subgraph:
    'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gnosis-chain-v2',
  poolsUrlV2: '',
  subgraphs: {
    main: [
      'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gnosis-chain-v2',
    ],
    aave: '',
    gauge:
      'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-gnosis-chain-b',
    blocks: '',
  },
  supportsEIP1559: true,
  supportsElementPools: true,
  blockTime: 5,
  nativeAsset: {
    name: 'xDAI',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    symbol: 'xDAI',
    decimals: 18,
    deeplinkId: 'xdai',
    logoURI: 'tokens/xdai.png',
    minTransactionBuffer: '0.05',
  },
  addresses: {
    ...contracts,
  },
  pools,
  keys: {
    infura: 'daaa68ec242643719749dd1caba2fc66',
    alchemy: 'oGLgncMVHNWltnK0nTfiryxQ6gYemKQO',
  },
  gauges: {
    type: 2,
    weight: 100,
  },
  tokenlists,
};

export default config;