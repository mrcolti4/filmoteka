import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './Loader/LoaderScreen';
import Layout from 'layouts/Layout';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { useDispatch } from 'react-redux';
import { getGenres } from 'redux/slices/genres/thunks';

const MoviesDetailsPage = lazy(() =>
  import('pages/MoviesDetailsPage/MoviesDetailsPage')
);

export const App = () => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(getGenres());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route
            path="movies/:mediaType/:movieId/*"
            element={<MoviesDetailsPage />}
          />
        </Route>
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
