import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import MovieList from 'components/MovieList/MovieList';

import { getMoviesByQuery } from 'js/API_requests/getMoviesByQuery';
import { searchParamKey } from 'js/consts';
import { useData } from 'js/useData/useData';
import ErrorPage from './ErrorPage';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const { data, isFetching, error, getData } = useData();

  const moviesList = data;

  useEffect(() => {
    getData(getMoviesByQuery(search));
  }, [getData, search]);

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
