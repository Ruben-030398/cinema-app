import { OPTIONS } from "./config";
import { MoviesResponse } from "./types";

const url = `${import.meta.env.VITE_APP_API_ENDPOINT}/movie/top_rated`;

const getTopRated = async (query: URL['search'] = ''): Promise<MoviesResponse> => {
  return await (await fetch(`${url}${query}`, OPTIONS)).json()
}

export default getTopRated;