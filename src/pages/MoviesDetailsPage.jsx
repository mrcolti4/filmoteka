import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import ErrorPage from './ErrorPage';

import { getSingleMovie } from 'js/API_requests/getSingleMovie';
import { useData } from 'js/useData/useData';
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const LocationProvider = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.key}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </Suspense>
  );
};

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const { data: moviesList, isFetching, error, getData } = useData();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    getData(getSingleMovie(movieId));
  }, [getData, movieId]);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section>
      <div className="container">
        {isFetching && <Loader />}
        {moviesList && (
          <MovieDetails data={moviesList} backLinkHref={backLinkHref} />
        )}
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </div>
    </section>
  );
};

export default MoviesDetailsPage;
