import { Config, Network } from './types';

import artio from './artio';
import mainnet from './mainnet';

const config: Record<Network | number, Config> = {
  [Network.MAINNET]: mainnet,
  [Network.ARTIO]: artio,
};

export default config;
