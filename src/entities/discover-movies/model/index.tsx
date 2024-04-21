import { discover } from "@/shared/api"
import { MoviesResponse } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const DISCOVER_QUERY_KEY = 'discover'

export const useDiscover = (query: string = '', options: Partial<UseQueryOptions> = {}) => {
  return useQuery({
    queryKey: [DISCOVER_QUERY_KEY],
    queryFn: () => discover(query),
    ...options
  }) as UseQueryResult<MoviesResponse>;
}