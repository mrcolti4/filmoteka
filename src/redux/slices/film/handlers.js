import { isUnique } from 'js/utils/SortAPI/isUnique';

export const handlePending = state => {
  state.isFetching = true;
  state.error = null;
  state.totalPages = 1;
};

export const handleSearchPending = state => {
  state.isFetching = true;
  state.movies = null;
  state.error = null;
};

export const handleMoviesFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.movies = payload.movies;
  state.totalPages = payload.totalPages;
};

export const handleRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

export const handleSingleMovieFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.movieDetail = payload;
  if (isUnique(state.recentlyWatched, payload.id)) {
    state.recentlyWatched.unshift(payload);
  }
  if (state.recentlyWatched.length > 10) {
    state.recentlyWatched.length = Math.min(state.recentlyWatched.length, 10);
  }
};

export const handleSingleMoviePending = state => {
  state.isFetching = true;
  state.movieDetail = null;
  state.similarMovies = null;
};

export const handleSimilarMovieFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.similarMovies = payload;
};
