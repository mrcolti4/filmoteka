import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getSearchMovies } from 'redux/slices/film/thunks';
import { goToPosition } from 'redux/slices/scroll/slice';

import { searchParamKey } from 'js/utils/consts';
import { SortAPI } from 'js/utils/SortAPI/SortAPI';

import MovieList from 'components/MovieList/MovieList';
import MovieFilter from './components/MovieFilter/MovieFilter';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useSearch } from './useSearch';

const MoviesPage = () => {
  const [search, genre] = useSearch();
  const dispatcher = useDispatch();
  const data = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatcher(getSearchMovies(search));
  }, [dispatcher, search]);

  useEffect(() => {
    dispatcher(goToPosition());
  }, [dispatcher]);

  const moviesList = SortAPI.sortMovieByVoteCount(data);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section className="movie-search">
      <div className="container">
        <MovieFilter />
        <MovieList movies={moviesList} isFetching={isFetching} />
      </div>
    </section>
  );
};

export default MoviesPage;
