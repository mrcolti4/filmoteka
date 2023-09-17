export const api_key = '87f12b18e4fc63fd21356bb87e3a72cc';
export const searchParamKey = 'search';
export const genreParamKey = 'genre';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p';

export const PageRoutes = {
  HOME_ROUTE: '/',
  MOVIES_ROUTE: '/movies',
  MOVIE_PAGE_ROUTE: '/movies/:movieId/*',
  getMoviePageRoute(movieId) {
    return `/movies/:${movieId}/*`;
  },
};
