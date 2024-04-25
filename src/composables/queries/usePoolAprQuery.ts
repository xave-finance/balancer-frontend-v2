import { QueryObserverOptions, useQuery } from '@tanstack/vue-query';
import { computed, reactive } from 'vue';

import QUERY_KEYS from '@/constants/queryKeys';
import { poolsStoreService } from '@/services/pool/pools-store.service';
import { Pool } from '@/services/pool/types';

import { getBalancerSDK } from '@/dependencies/balancer-sdk';
import { AprBreakdown } from '@xclabs/balancer-sdk';
import useNetwork from '../useNetwork';
import usePoolQuery from './usePoolQuery';

type QueryOptions = QueryObserverOptions<AprBreakdown>;

export default function usePoolAprQuery(
  id: string,
  options: QueryObserverOptions<AprBreakdown> = {}
) {
  /**
   * @description
   * If pool is already downloaded, we can use it instantly
   * it may be if user came to pool page from home page
   */
  const storedPool = poolsStoreService.findPool(id);

  /**
   * COMPOSABLES
   */
  const poolQuery = usePoolQuery(id);

  /**
   * QUERY DEPENDENCIES
   */
  const { networkId } = useNetwork();

  /**
   * COMPUTED
   */
  const pool = computed(() => poolQuery.data.value);
  const enabled = computed(() => !!pool.value?.id || !!storedPool);

  /**
   * QUERY INPUTS
   */
  const queryKey = QUERY_KEYS.Pools.APR(networkId, id);

  const queryFn = async (): Promise<AprBreakdown> => {
    let _pool: Pool;
    if (storedPool) {
      _pool = storedPool;
    } else if (pool.value) {
      // copy computed pool to avoid mutation warnings
      _pool = { ...pool.value, tokens: [...pool.value.tokens] };
    } else {
      throw new Error('No pool');
    }

    if (_pool?.apr) {
      return _pool.apr;
    }

    _pool.chainId = networkId.value;

    const apr = await getBalancerSDK().pools.apr(_pool);

    return apr;
  };
  const queryOptions = reactive({
    enabled,
    ...options,
  });
  return useQuery<AprBreakdown>(
    queryKey,
    queryFn,
    queryOptions as QueryOptions
  );
}
