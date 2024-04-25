import { Relayer } from '@xclabs/balancer-sdk';
import { initRelayer } from './Relayer';

export const defaultRelayerSignature = 'test relayer signature';

export class MockedRelayer extends Relayer {
  static async signRelayerApproval() {
    return defaultRelayerSignature;
  }
}

export function initRelayerWithDefaultMocks() {
  initRelayer(MockedRelayer);
}
