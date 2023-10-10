import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGenres } from 'redux/slices/genres/thunks';

import Loader from './Loader/LoaderScreen';
import Layout from 'layouts/Layout';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import DiscoverPage from 'pages/DiscoverPage/DiscoverPage';

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
          <Route path="discover" element={<DiscoverPage />} />
        </Route>
        <Route path="error" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
