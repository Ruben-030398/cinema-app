import search from "@/shared/api/search"
import { MoviesResponse } from "@/shared/api/types"
import {  UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const SEARCH_QUERY_KEY = 'search'

export const useSearch = (query: string = '', options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [SEARCH_QUERY_KEY, query], queryFn: () => search(query), ...options }) as UseQueryResult<MoviesResponse>
}