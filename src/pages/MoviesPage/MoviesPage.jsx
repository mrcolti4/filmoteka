import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearch } from 'hooks/useSearch';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getSearchMovies } from 'redux/slices/film/thunks';

import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import {
  genreParamKey,
  mediaTypeParamKey,
  pageParamKey,
  searchParamKey,
} from 'js/utils/consts';

import MovieList from 'components/MovieList/MovieList';
import MovieForm from '../../components/ui/form/MovieForm/MovieForm';
import MoviePagination from '../../components/ui/form/MoviePagination/MoviePagination';
import Loader from 'components/Loader/Loader';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useGenre } from 'hooks/useGenre';
import { isNull } from 'js/utils/isNull/isNull';

const MoviesPage = () => {
  const { search, genre, page, mediaType, searchParams, setSearchParams } =
    useSearch();
  const { genres, setDefaultFilters } = useGenre();
  const dispatcher = useDispatch();
  const data = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  function onSubmit({ search, genre, mediaType }) {
    if (!search) {
      console.log('not search');
      return;
    }
    setSearchParams({
      [mediaTypeParamKey]: mediaType,
      [searchParamKey]: search,
      [genreParamKey]: genre ? genre.map(item => item.value).join(',') : '',
      [pageParamKey]: page ?? 1,
    });
  }

  useEffect(() => {
    if (mediaType) dispatcher(getSearchMovies(searchParams));
  }, [dispatcher, search, mediaType, page]);

  useEffect(() => {
    if (!isNull(genres)) {
      setDefaultFilters(genres);
    }
  }, [genres]);

  const sortedList = SortAPI.sortMovieByGenres(genre, data);
  const moviesList = SortAPI.sortMovieByVoteCount(sortedList);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section className="movie-search">
      <div className="container">
        {isFetching && <Loader />}
        <MovieForm isSearch onSubmit={onSubmit} />
        <MovieList
          movies={moviesList}
          isFetching={isFetching}
          type={mediaType}
        />
        <MoviePagination />
      </div>
    </section>
  );
};

export default MoviesPage;
