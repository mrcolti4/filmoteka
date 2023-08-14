import axios from 'axios';
import { api_key } from 'js/consts';

export const getMovieDetail = async url => {
  const config = {
    params: {
      api_key,
    },
  };
  const { data } = await axios(url, config);

  return data;
};
