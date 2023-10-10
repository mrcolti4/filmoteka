import { getGenresOptions } from 'pages/MoviesPage/getGenresOptions';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMovieGenres,
  selectTvGenres,
} from 'redux/slices/genres/selectors';
import { onPageLoad } from 'redux/slices/genres/slice';
import { useSearch } from './useSearch';

export const useGenre = () => {
  const dispatcher = useDispatch();
  const movieGenre = useSelector(selectMovieGenres);
  const tvGenre = useSelector(selectTvGenres);
  const { genre, mediaType } = useSearch();

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

  return { genres, setDefaultFilters };
};
