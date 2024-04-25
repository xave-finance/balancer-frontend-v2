import * as artio from '@/assets/data/contracts/artio.json';
import { Contracts } from '../types';

const contracts: Contracts = {
  merkleRedeem: '',
  merkleOrchard: '',
  merkleOrchardV2: '',
  multicall: '0xf49877e3E5e9297d46AFD73B19C75B4000C2dE90',
  authorizer: artio.Authorizer,
  vault: artio.Vault,
  weightedPoolFactory: artio.WeightedPoolFactory,
  stablePoolFactory: '',
  lidoRelayer: '',
  balancerHelpers: artio.BalancerHelpers,
  batchRelayer: '',
  veBAL: '',
  gaugeController: '',
  gaugeFactory: '',
  balancerMinter: '',
  tokenAdmin: '',
  veDelegationProxy: '',
  veBALHelpers: '',
  feeDistributor: '', // @todo: figure out who is the fee distributor
  feeDistributorDeprecated: '',
  faucet: 'https://artio.faucet.berachain.com/',
  omniVotingEscrow: '',
  claimSubmission: '',
};

export default contracts;
