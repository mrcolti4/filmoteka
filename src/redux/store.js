import { configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './slices/film/slice';
import { scrollReducer } from './slices/scroll/slice';
import { genresReducer } from './slices/genres/slice';

export const store = configureStore({
  reducer: {
    film: filmReducer,
    scroll: scrollReducer,
    genres: genresReducer,
  },
});
