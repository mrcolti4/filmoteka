import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollPosition: 0,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition(state, { payload }) {
      state.scrollPosition = payload;
    },
    goToPosition(state) {
      window.scrollTo({ top: state.scrollPosition, behavior: 'smooth' });
    },
    resetScrollPosition(state) {
      state.scrollPosition = 0;
    },
  },
});

export const { setScrollPosition, goToPosition, resetScrollPosition } =
  scrollSlice.actions;
export const scrollReducer = scrollSlice.reducer;
