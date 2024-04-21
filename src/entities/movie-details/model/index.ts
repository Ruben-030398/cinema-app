import getDetails from "@/shared/api/details"
import { MovieDetails } from "@/shared/api/types"
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

export const GET_DETAILS_QUERY_KEY = 'details' 

export const useGetMovieDetails = (id: number, options?: Partial<UseQueryOptions>) => {
  return useQuery({ queryKey: [GET_DETAILS_QUERY_KEY, id], queryFn: () => getDetails(id), ...options }) as UseQueryResult<MovieDetails>
}