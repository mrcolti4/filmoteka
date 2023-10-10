import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filmReducer } from './slices/film/slice';
import { genresReducer } from './slices/genres/slice';
import { rootReducer } from './slices/root/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recentlyWatched'],
};

const persistedFilm = persistReducer(persistConfig, filmReducer);

export const store = configureStore({
  reducer: {
    film: persistedFilm,
    genres: genresReducer,
    root: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
