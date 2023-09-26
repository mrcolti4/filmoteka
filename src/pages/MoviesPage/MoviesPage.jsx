import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getSearchMovies } from 'redux/slices/film/thunks';
import { goToPosition } from 'redux/slices/scroll/slice';
import { onPageLoad } from 'redux/slices/genres/slice';
import { getGenresOptions } from './getGenresOptions';
import { getGenres } from 'redux/slices/genres/thunks';

import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import { useSearch } from './useSearch';

import MovieList from 'components/MovieList/MovieList';
import MovieForm from './components/MovieForm/MovieForm';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const MoviesPage = () => {
  const { search, genre, mediaType } = useSearch();
  const dispatcher = useDispatch();
  const data = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  const setDefaultFilters = data => {
    if (!genre) return;
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

  useEffect(() => {
    if (mediaType) dispatcher(getSearchMovies({ search, mediaType }));
    dispatcher(getGenres()).unwrap().then(setDefaultFilters);
  }, [dispatcher, search, mediaType]);

  useEffect(() => {
    dispatcher(goToPosition());
  }, [dispatcher]);

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
      </div>
    </section>
  );
};

export default MoviesPage;
