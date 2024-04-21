import { OPTIONS } from "./config";
import { MoviesResponse } from "./types";

//?query=dsads&include_adult=false&language=en-US&page=1

const url = `${import.meta.env.VITE_APP_API_ENDPOINT}/search/movie`;

const search = async (query: URL['search'] = ''): Promise<MoviesResponse> => {
  return await (await fetch(`${url}${query}`, OPTIONS)).json()
}

export default search;