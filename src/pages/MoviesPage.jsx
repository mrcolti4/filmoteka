import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from 'components/MovieList/MovieList';
import ErrorPage from './ErrorPage/ErrorPage';

import { searchParamKey } from 'js/utils/consts';
import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getSearchMovies } from 'redux/slices/film/thunks';
import { goToPosition } from 'redux/slices/scroll/slice';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);

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

  const onSearch = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value.trim();
    if (!searchValue) return;
    setSearchParams({ [searchParamKey]: searchValue });
  };

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onSearch}>
          <input name="search" type="text" defaultValue={search || ''} />
          <button type="submit">Search</button>
        </form>
        <MovieList movies={moviesList} isFetching={isFetching} />
      </div>
    </>
  );
};

export default MoviesPage;
