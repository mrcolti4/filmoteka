import axios from 'axios';
import { api_key } from 'js/consts';

const URL = 'https://api.themoviedb.org/3/trending/all/day';

export const getTrendMovies = async () => {
  const config = {
    params: {
      api_key,
    },
  };

  const {
    data: { results },
  } = await axios(URL, config);

  return results;
};
