import { OPTIONS } from "./config";
import { MovieDetails } from "./types";

const url = `${import.meta.env.VITE_APP_API_ENDPOINT}/movie`;

const getDetails = async (id: number): Promise<MovieDetails> => {
  return await (await fetch(`${url}/${id}`, OPTIONS)).json()
}

export default getDetails;