import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getSearchMovies } from 'redux/slices/film/thunks';
import { onPageLoad } from 'redux/slices/genres/slice';
import { getGenresOptions } from './getGenresOptions';

import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import { useSearch } from './useSearch';

import MovieList from 'components/MovieList/MovieList';
import MovieForm from './components/MovieForm/MovieForm';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import {
  selectMovieGenres,
  selectTvGenres,
} from 'redux/slices/genres/selectors';
import MoviePagination from './components/MoviePagination/MoviePagination';

const MoviesPage = () => {
  const { search, genre, page, mediaType } = useSearch();
  const dispatcher = useDispatch();
  const data = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);
  const movieGenre = useSelector(selectMovieGenres);
  const tvGenre = useSelector(selectTvGenres);

  useEffect(() => {
    if (mediaType) dispatcher(getSearchMovies({ search, mediaType, page }));
  }, [dispatcher, search, mediaType, page]);

  useEffect(() => {
    const genres = {
      movie: movieGenre,
      tv: tvGenre,
    };

    const setDefaultFilters = data => {
      if (!genre) return dispatcher(onPageLoad(null));

      const options = getGenresOptions(data[mediaType]);
      const genres = genre.split(',');
      const choosenFilters = [];
      for (let i = 0; i < genres.length; i++) {
        const filter = options.filter(
          option => option.value === Number(genres[i])
        );
        choosenFilters.push(...filter);
      }
      dispatcher(onPageLoad(choosenFilters));
    };

    if (genres.movie?.length > 0) {
      setDefaultFilters(genres);
    }
  }, [dispatcher, genre, mediaType, movieGenre, tvGenre]);

  const sortedList = SortAPI.sortMovieByGenres(genre, data);
  const moviesList = SortAPI.sortMovieByVoteCount(sortedList);

  if (error?.message) {
    return <ErrorPage />;
  }

  return (
    <section className="movie-search">
      <div className="container">
        <MovieForm />
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
