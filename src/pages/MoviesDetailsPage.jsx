import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/LoaderScreen';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import LoaderScreen from 'components/Loader/LoaderScreen';
import ErrorPage from './ErrorPage/ErrorPage';

import { LocationProvider } from 'js/utils/LocationProvider/LocationProvider';
import {
  selectMoviesError,
  selectMoviesIsFetching,
  selectMoviesMovieDetail,
} from 'redux/slices/film/selectors';
import { getSingleMovie } from 'redux/slices/film/thunks';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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

  const mediaType = location.state.media_type;
  const backLinkHref = location.state?.from ?? '/movies';

  const dispatcher = useDispatch();
  const movieDetail = useSelector(selectMoviesMovieDetail);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    if (!movieId) return;
    dispatcher(getSingleMovie({ movieId, mediaType }));
  }, [dispatcher, movieId]);

  if (error) {
    return <ErrorPage />;
  }
  console.log(isFetching);
  return (
    <section>
      <div className="container">
        {isFetching && <LoaderScreen />}
        {movieDetail && (
          <MovieDetails data={movieDetail} backLinkHref={backLinkHref} />
        )}
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </div>
    </section>
  );
};

export default MoviesDetailsPage;
