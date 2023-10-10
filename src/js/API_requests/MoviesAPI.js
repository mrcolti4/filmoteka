import axios from 'axios';
import { api_key } from 'js/utils/consts';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
// instance.defaults.headers['X-memc-KEY'] = api_key;
// instance.defaults.headers['x-rapidapi-host'] = 'https://api.themoviedb.org/3/';
// instance.defaults.headers['Access-Control-Allow-Origin'] = '*';
// instance.defaults.headers['Access-Control-Expose-Headers'] = '*';

// Access-Control-Expose-Headers

const getSearchParams = params => {
  const urlParams = {};
  let mediaType = '';
  for (const param of params.entries()) {
    if (param[0] === 'media_type') {
      mediaType = param[1];
    }
    urlParams[param[0]] = param[1];
  }

  return { urlParams, mediaType };
};

export default class MovieAPI {
  static config = {
    params: {
      api_key,
    },
  };
  static getMovieDetail = async url => {
    const { data } = await axios.get(url, this.config);

    return data;
  };

  static getMoviesByQuery = async params => {
    const { urlParams, mediaType } = getSearchParams(params);

    const config = {
      params: { api_key, ...urlParams },
      paramsSerializer: params => {
        return qs.stringify(params);
      },
    };
    const { data } = await instance(`/search/${mediaType}`, config);

    return { movies: data.results, totalPages: data.total_pages };
  };

  static getSingleMovie = async (movieId, movieType) => {
    const { data } = await instance.get(`${movieType}/${movieId}`, this.config);

    return data;
  };

  static getTrendMovies = async (mediaType, timeWindow) => {
    const { data } = await instance.get(
      `/trending/${mediaType}/${timeWindow}`,
      this.config
    );

    return { movies: data.results };
  };

  static getCinemaMovies = async () => {
    const {
      data: { dates, results },
    } = await instance.get('movie/now_playing', this.config);

    return { dates, results };
  };

  static getGenres = async () => {
    const {
      data: { genres: movie },
    } = await instance.get('genre/movie/list', this.config);

    const {
      data: { genres: tv },
    } = await instance.get('genre/tv/list', this.config);

    return { movie, tv };
  };

  static getSimilarMovies = async (movieId, mediaType) => {
    const {
      data: { results },
    } = await instance.get(`${mediaType}/${movieId}/similar`, this.config);

    return results;
  };

  static getDiscoverMovies = async params => {
    const { urlParams, mediaType } = getSearchParams(params);

    if (!mediaType) return { movies: null, totalPages: null };

    const config = {
      params: { api_key, ...urlParams },
      paramsSerializer: params => {
        return qs.stringify(params);
      },
    };

    const { data } = await instance.get(`discover/${mediaType}`, config);

    return { movies: data.results, totalPages: data.total_pages };
  };
}
