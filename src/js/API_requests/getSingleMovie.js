import axios from 'axios';
import { api_key } from 'js/consts';

export const getSingleMovie = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}`;
  const config = {
    params: {
      api_key,
    },
  };
  const { data } = await axios(URL, config);

  return data;
};
