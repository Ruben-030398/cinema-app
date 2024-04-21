import { OPTIONS } from "./config";
import { MoviesResponse } from "./types";

const url = `${import.meta.env.VITE_APP_API_ENDPOINT}/movie/now_playing`;

const getNowPlaying = async (query: URL['search'] = ''): Promise<MoviesResponse> => {
  return await (await fetch(`${url}${query}`, OPTIONS)).json()
}

export default getNowPlaying;