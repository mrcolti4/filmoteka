import { createSlice } from '@reduxjs/toolkit';
import {
  getSearchMovies,
  getSimilarMovies,
  getSingleMovie,
  getTrendMovies,
} from './thunks';
import {
  handleMoviesFulfilled,
  handlePending,
  handleRejected,
  handleSearchPending,
  handleSimilarMovieFulfilled,
  handleSingleMovieFulfilled,
  handleSingleMoviePending,
} from './handlers';

const initialState = {
  movies: null,
  movieDetail: null,
  similarMovies: null,
  recentlyWatched: [],
  isFetching: false,
  error: null,
  totalPages: 1,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTrendMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getSearchMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getSingleMovie.pending, handleSingleMoviePending)
      .addCase(getSingleMovie.fulfilled, handleSingleMovieFulfilled)
      .addCase(getSimilarMovies.fulfilled, handleSimilarMovieFulfilled)
      .addCase(getSearchMovies.pending, handleSearchPending)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { setPage } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;
