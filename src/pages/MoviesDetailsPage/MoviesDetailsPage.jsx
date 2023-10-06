import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MovieDetails from 'pages/MoviesDetailsPage/components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';

import { LocationProvider } from 'js/utils/LocationProvider/LocationProvider';
import {
  selectMoviesError,
  selectMoviesIsFetching,
  selectMoviesMovieDetail,
  selectSimilarMovies,
} from 'redux/slices/film/selectors';
import { getSimilarMovies, getSingleMovie } from 'redux/slices/film/thunks';

const Cast = lazy(() => import('pages/MoviesDetailsPage/components/Cast/Cast'));
const Reviews = lazy(() =>
  import('pages/MoviesDetailsPage/components/Reviews/Reviews')
);

const MoviesDetailsPage = () => {
  const { mediaType, movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  const dispatcher = useDispatch();
  const movieDetail = useSelector(selectMoviesMovieDetail);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);
  const similar = useSelector(selectSimilarMovies);

  useEffect(() => {
    if (!movieId) return;
    dispatcher(getSingleMovie({ movieId, mediaType }));
    dispatcher(getSimilarMovies({ movieId, mediaType }));
  }, [dispatcher, movieId, mediaType]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <section>
      {isFetching && <Loader />}
      <div className="container">
        {movieDetail && (
          <MovieDetails
            data={movieDetail}
            backLinkHref={backLinkHref}
            mediaType={mediaType}
            similar={similar}
          />
        )}
        <LocationProvider>
          <Suspense fallback={<Loader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </LocationProvider>
      </div>
    </section>
  );
};

export default MoviesDetailsPage;
