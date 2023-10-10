import MovieList from 'components/MovieList/MovieList';
import MovieForm from 'components/ui/form/MovieForm/MovieForm';
import MoviePagination from 'components/ui/form/MoviePagination/MoviePagination';
import { useGenre } from 'hooks/useGenre';
import { useSearch } from 'hooks/useSearch';

import {
  genreParamKey,
  mediaTypeParamKey,
  pageParamKey,
} from 'js/utils/consts';
import { isNull } from 'js/utils/isNull/isNull';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoviesData } from 'redux/slices/film/selectors';
import { getDiscoverMovies } from 'redux/slices/film/thunks';

function DiscoverPage() {
  const dispatch = useDispatch();
  const { genres, setDefaultFilters } = useGenre();
  const { mediaType, page, searchParams, setSearchParams } = useSearch();
  const movies = useSelector(selectMoviesData);

  function onSubmit({ genre, mediaType }) {
    if (!genre) {
      console.log('not search');
      return;
    }
    setSearchParams({
      [mediaTypeParamKey]: mediaType,
      [genreParamKey]: genre ? genre.map(item => item.value).join(',') : '',
      [pageParamKey]: page ?? 1,
    });
  }

  useEffect(() => {
    dispatch(getDiscoverMovies(searchParams));
  }, [mediaType, page]);

  useEffect(() => {
    if (!isNull(genres)) {
      setDefaultFilters(genres);
    }
  }, [genres]);

  return (
    <section className="container">
      <h1>Discover</h1>
      <h2>Discover movies via form below</h2>
      <MovieForm onSubmit={onSubmit} />
      <MovieList movies={movies} />
      <MoviePagination />
    </section>
  );
}

export default DiscoverPage;
