import { getNowPlaying } from "@/shared/api"
import { MoviesResponse } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const NOW_PLAYING_QUERY_KEY = 'now-playing'

export const useNowPlaying = (query: string = '', options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [NOW_PLAYING_QUERY_KEY, query], queryFn: () => getNowPlaying(query), ...options })  as UseQueryResult<MoviesResponse>
}