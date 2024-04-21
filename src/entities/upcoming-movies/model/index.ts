import { getUpComing } from "@/shared/api"
import { MoviesResponse } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const UPCOMING_QUERY_KEY = 'top-rated'

export const useGetUpcoming = (query: string = '', options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [UPCOMING_QUERY_KEY, query], queryFn: () => getUpComing(query), ...options }) as UseQueryResult<MoviesResponse>
}