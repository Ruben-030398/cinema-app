// QUERY_STRING_EXAMPLE = include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

import { OPTIONS } from "./config";
import { MoviesResponse } from "./types";

const url = `${import.meta.env.VITE_APP_API_ENDPOINT}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

const discover = async (query: URL['search'] = ''): Promise<MoviesResponse> => {
  return await (await fetch(`${url}/${query}`, OPTIONS)).json();
}

export default discover;
