import { configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './slices/film/slice';
import { scrollReducer } from './slices/scroll/slice';

export const store = configureStore({
  reducer: {
    film: filmReducer,
    scroll: scrollReducer,
  },
});
