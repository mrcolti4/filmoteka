export const selectMoviesData = state => state.film.movies;
export const selectMoviesMovieDetail = state => state.film.movieDetail;
export const selectMoviesIsFetching = state => state.film.isFetching;
export const selectMoviesError = state => state.film.error;
export const selectSimilarMovies = state => state.film.similarMovies;
export const selectRecentlyWatchedMovies = state => state.film.recentlyWatched;
export const selectTotalPages = state => state.film.totalPages;
