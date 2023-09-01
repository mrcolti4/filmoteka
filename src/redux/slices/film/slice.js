import { createSlice } from '@reduxjs/toolkit';
import { getSearchMovies, getSingleMovie, getTrendMovies } from './thunks';

const initialState = {
  movies: null,
  movieDetail: null,
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
      .addCase(getSingleMovie.pending, handlePending)
      .addCase(getSingleMovie.fulfilled, handleSingleMovieFulfilled)
      .addCase(getSingleMovie.rejected, handleRejected);
  },
});

export const filmReducer = filmSlice.reducer;
