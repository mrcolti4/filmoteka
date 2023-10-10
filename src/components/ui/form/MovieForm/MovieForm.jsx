import { useFormik } from 'formik';
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
import { useSearch } from 'hooks/useSearch';

const MovieForm = ({ isSearch, onSubmit }) => {
  const options = {
    movie: getGenresOptions(useSelector(selectMovieGenres)),
    tv: getGenresOptions(useSelector(selectTvGenres)),
  };
  const filter = useSelector(selectMovieFilter);

  const { search, mediaType } = useSearch();
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

  const handleRadioButton = ({ target: { value } }) => {
    setFieldValue('mediaType', value);
    setFieldValue('genre', '');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      {isSearch ? (
        <input
          name="search"
          type="text"
          defaultValue={search || ''}
          onChange={handleChange}
          required
        />
      ) : null}
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
