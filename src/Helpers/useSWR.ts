import { useRequest } from "ahooks";
import type { Options, Service } from "ahooks/lib/useRequest/src/types";

/**
 * @author Aloento
 * @since 1.3.5
 * @version 0.1.0
 */
export function useSWR<TData, TParams extends any[]>(
  key: string, service: Service<TData, TParams>, options: Options<TData, TParams>
) {
  const req = useRequest(
    service,
    {
      staleTime: 5000,
      ...options,
      cacheKey: key,
      setCache: (data) => localStorage.setItem(key, JSON.stringify(data)),
      getCache: () => JSON.parse(localStorage.getItem(key) || "{}"),
    }
  );

  return req;
}
