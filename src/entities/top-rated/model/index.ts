import { getTopRated } from "@/shared/api"
import { MoviesResponse } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const TOP_RATED_QUERY_KEY = 'top-rated'

export const useGetTopRated = (query: string = '', options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [TOP_RATED_QUERY_KEY, query], queryFn: () => getTopRated(query), ...options }) as  UseQueryResult<MoviesResponse>
}