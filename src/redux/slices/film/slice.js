import { createSlice } from '@reduxjs/toolkit';
import {
  getDiscoverMovies,
  getSearchMovies,
  getSimilarMovies,
  getSingleMovie,
  getTrendMovies,
} from './thunks';
import {
  handleMoviesFulfilled,
  handlePending,
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
  totalPages: 1,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getSingleMovie.pending, handleSingleMoviePending)
      .addCase(getSearchMovies.pending, handleSearchPending)
      .addCase(getDiscoverMovies.pending, handleSearchPending)
      .addCase(getTrendMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getSearchMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getSingleMovie.fulfilled, handleSingleMovieFulfilled)
      .addCase(getSimilarMovies.fulfilled, handleSimilarMovieFulfilled)
      .addCase(getDiscoverMovies.fulfilled, handleMoviesFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending);
  },
});

export const filmReducer = filmSlice.reducer;
