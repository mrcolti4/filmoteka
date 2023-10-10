import { isUnique } from 'js/utils/SortAPI/isUnique';

export const handlePending = state => {
  state.totalPages = 1;
};

export const handleSearchPending = state => {
  state.movies = null;
};

export const handleMoviesFulfilled = (state, { payload }) => {
  state.movies = payload.movies;
  state.totalPages = payload.totalPages;
};

export const handleSingleMovieFulfilled = (state, { payload }) => {
  state.movieDetail = payload;
  if (isUnique(state.recentlyWatched, payload.id)) {
    state.recentlyWatched.unshift(payload);
  }
  if (state.recentlyWatched.length > 10) {
    state.recentlyWatched.length = Math.min(state.recentlyWatched.length, 10);
  }
};

export const handleSingleMoviePending = state => {
  state.movieDetail = null;
  state.similarMovies = null;
};

export const handleSimilarMovieFulfilled = (state, { payload }) => {
  state.similarMovies = payload;
};
