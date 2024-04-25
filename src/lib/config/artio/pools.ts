import * as artio from '@/assets/data/contracts/artio.json';
import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    // 'Stable',
    // 'MetaStable',
    // 'LiquidityBootstrapping',
    // 'Investment',
    // 'StablePhantom',
    'ComposableStable',
    // 'FX',
    // 'EulerLinear',
    // 'Gyro2',
    // 'Gyro3',
    // 'GyroE',
  ],
  Stable: {
    AllowList: [
      '0x9610423917403d142705d8d060127f88764120f6000000000000000000000003', // CSP - USDT/USDC
      '0xb43d9bb28e60e5ede04dfbe2c723a9bcf578397c000000000000000000000005', // CSP - DAI/USDT
      '0xe016feca197088659b78e660eaf666031a9fb8b1000000000000000000000006', // CSP - EURS/USDC
      '0xf0b886478d6c0c579e53facbcc6e4abce96ae4b2000000000000000000000004', // CSP - EURS/USDC
    ],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [],
  },
  Factories: {
    [artio.WeightedPoolFactory]: 'weightedPool', // weighted pool v4
    [artio.ComposableStablePoolFactory]: 'composableStablePool', // ComposableStable v5
    // '0xfb23bc0d2629268442cd6521cf4170698967105f': 'fx',
  },
  Stakable: {
    VotingGaugePools: [],
    AllowList: [],
  },
  Metadata: {},
  Deep: [],
  BoostedApr: [],
  DisabledJoins: [],
  NewVersionAvailable: {},
  Deprecated: {},
  GaugeMigration: {},
  BrandedRedirect: {},
  ExitViaInternalBalance: [],
  Issues: {},
};

export default pools;
