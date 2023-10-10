import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isFetching = true;
  state.error = null;
};

const handleFulfilled = state => {
  state.isFetching = false;
};

const handleRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

const initialState = {
  isFetching: false,
  error: null,
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const rootReducer = rootSlice.reducer;
