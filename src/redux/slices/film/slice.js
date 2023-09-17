import { createSlice } from '@reduxjs/toolkit';
import {
  getSearchMovies,
  getSimilarMovies,
  getSingleMovie,
  getTrendMovies,
} from './thunks';
import { getUnique } from 'js/utils/SortAPI/getUnique';

const initialState = {
  movies: null,
  movieDetail: null,
  similarMovies: null,
  recentlyWatched: [],
  isFetching: false,
  error: null,
};

const handlePending = state => {
  state.isFetching = true;
  state.error = null;
};

const handleMoviesFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.movies = payload;
};

const handleRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

const handleSingleMovieFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.movieDetail = payload;
  if (getUnique(state.recentlyWatched, payload.id)) {
    state.recentlyWatched.unshift(payload);
  }
  if (state.recentlyWatched.length > 10) {
    state.recentlyWatched.length = Math.min(state.recentlyWatched.length, 10);
  }
};

const handleSingleMoviePending = state => {
  state.isFetching = true;
  state.movieDetail = null;
  state.similarMovies = null;
};

const handleSimilarMovieFulfilled = (state, { payload }) => {
  state.isFetching = false;
  state.similarMovies = payload;
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTrendMovies.pending, handlePending)
      .addCase(getTrendMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getTrendMovies.rejected, handleRejected)
      .addCase(getSearchMovies.pending, handlePending)
      .addCase(getSearchMovies.fulfilled, handleMoviesFulfilled)
      .addCase(getSearchMovies.rejected, handleRejected)
      .addCase(getSingleMovie.pending, handleSingleMoviePending)
      .addCase(getSingleMovie.fulfilled, handleSingleMovieFulfilled)
      .addCase(getSingleMovie.rejected, handleRejected)
      .addCase(getSimilarMovies.pending, handlePending)
      .addCase(getSimilarMovies.fulfilled, handleSimilarMovieFulfilled)
      .addCase(getSimilarMovies.rejected, handleRejected);
  },
});

export const filmReducer = filmSlice.reducer;
