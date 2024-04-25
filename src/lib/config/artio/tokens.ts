import * as artio from '@/assets/data/contracts/artio.json';
import { TokenConstants } from '../types';

const tokens: TokenConstants = {
  Popular: {
    Symbols: ['WBTC', 'DAI', 'USDC', 'BAL', 'WETH', 'HONEY'],
  },
  InitialSwapTokens: {
    input: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    output: '0x94d81606dca42d3680c0dfc1d93eeaf6c2d55f2d', // Mock USDC
  },
  Addresses: {
    nativeAsset: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // BERA
    wNativeAsset: '0x5806E416dA447b267cEA759358cF22Cc41FAE80F', // WBERA
    WETH: artio.WETH, // Mock WETH
    BAL: artio.BAL,
    // WBTC: '0x9DAD8A1F64692adeB74ACa26129e0F16897fF4BB',
    // HONEY: '0x7EeCA4205fF31f947EdBd49195a7A88E6A91161B'
  },
};

export default tokens;
