import { anSdkPool } from '@tests/unit/builders/sdk-pool.builders';
import {
  // eslint-disable-next-line no-restricted-imports
  PoolsFallbackRepository,
  PoolsRepositoryFetchOptions,
  Pool as SdkPool,
} from '@xclabs/balancer-sdk';
import { initPoolsFallbackRepository } from './PoolsFallbackRepository';

export const defaultPool1: SdkPool = anSdkPool();
export const defaultPool2: SdkPool = anSdkPool();
const mockedPools = [defaultPool1, defaultPool2];

class PoolsFallbackRepositoryMock extends PoolsFallbackRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetch(options: PoolsRepositoryFetchOptions): Promise<SdkPool[]> {
    return Promise.resolve(mockedPools);
  }
}

export function generatePoolsFallbackRepositoryMock() {
  return PoolsFallbackRepositoryMock;
}

export function initPoolsFallbackRepositoryWithDefaultMocks() {
  initPoolsFallbackRepository(generatePoolsFallbackRepositoryMock());
}
