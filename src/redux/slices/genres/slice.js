import { createSlice } from '@reduxjs/toolkit';
import { getGenres } from './thunks';

const initialState = {
  movie: null,
  tv: null,
  error: null,
};

const handlePending = state => {
  state.movie = null;
  state.tv = null;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.movie = payload.movie;
  state.tv = payload.tv;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getGenres.pending, handlePending)
      .addCase(getGenres.fulfilled, handleFulfilled)
      .addCase(getGenres.rejected, handleRejected);
  },
});

export const genresReducer = genresSlice.reducer;
