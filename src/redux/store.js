import { configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './slices/film/slice';

export const store = configureStore({
  reducer: {
    film: filmReducer,
  },
});
