import { useFormik } from 'formik';
import {
  genreParamKey,
  mediaTypeParamKey,
  searchParamKey,
} from 'js/utils/consts';
import { useSearch } from 'pages/MoviesPage/useSearch';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectMovieFilter,
  selectMovieGenres,
  selectTvGenres,
} from 'redux/slices/genres/selectors';
import SelectFilter from '../SelectFilter/SelectFilter';
import { getGenresOptions } from 'pages/MoviesPage/getGenresOptions';
import RadioButton from '../RadioButton/RadioButton';

const MovieForm = () => {
  const options = {
    movie: getGenresOptions(useSelector(selectMovieGenres)),
    tv: getGenresOptions(useSelector(selectTvGenres)),
  };
  const filter = useSelector(selectMovieFilter);
  const { search, mediaType, setSearchParams } = useSearch();
  const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      search: search ?? '',
      genre: filter ?? '',
      mediaType: mediaType ?? 'movie',
    },
    onSubmit,
  });

  useEffect(() => {
    setFieldValue('genre', filter);
  }, [setFieldValue, filter]);

  function onSubmit({ search, genre, mediaType }) {
    if (!search) {
      console.log('not search');
      return;
    }
    setSearchParams({
      [mediaTypeParamKey]: mediaType,
      [searchParamKey]: search,
      [genreParamKey]: genre ? genre.map(item => item.value).join(',') : '',
    });
  }

  const handleRadioButton = ({ target: { value } }) =>
    setFieldValue('mediaType', value);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <input
        name="search"
        type="text"
        defaultValue={search || ''}
        onChange={handleChange}
        required
      />
      <RadioButton
        onChange={handleRadioButton}
        value={'movie'}
        mediaType={values.mediaType}
      />
      <RadioButton
        onChange={handleRadioButton}
        value={'tv'}
        mediaType={values.mediaType}
      />
      <label className="filter__movie-genres">
        <span>Movie genres</span>
        <SelectFilter
          value={values.genre}
          options={options[values.mediaType]}
          onChange={choices => {
            setFieldValue('genre', choices);
          }}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieForm;
