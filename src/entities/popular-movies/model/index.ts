import getPopular from "@/shared/api/popular"
import { MoviesResponse } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const POPULAR_QUERY_KEY = 'popular'

export const usePopular = (query: string = '', options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [POPULAR_QUERY_KEY, query], queryFn: () => getPopular(query), ...options }) as  UseQueryResult<MoviesResponse>
}