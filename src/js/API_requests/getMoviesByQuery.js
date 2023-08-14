import axios from 'axios';
import qs from 'qs';
import { api_key } from 'js/consts';

export const getMoviesByQuery = async title => {
  const URL = `https://api.themoviedb.org/3/search/movie`;
  const config = {
    params: {
      query: title,
      api_key,
    },
    paramsSerializer: params => {
      return qs.stringify(params);
    },
  };
  const {
    data: { results },
  } = await axios(URL, config);

  return results;
};
