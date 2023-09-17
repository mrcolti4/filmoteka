import { useFormik } from 'formik';
import { genreParamKey, searchParamKey } from 'js/utils/consts';
import { useSearch } from 'pages/MoviesPage/useSearch';
import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import {
  selectMovieGenres,
  selectTvGenres,
} from 'redux/slices/genres/selectors';

function getGenresOptions(genres) {
  return genres?.map(({ id, name }) => {
    return { value: id, label: name };
  });
}

const MovieFilter = () => {
  const [search, _, setSearchParams] = useSearch();
  const onSubmit = ({ search, genre }) => {
    if (!search && !genre) return;
    setSearchParams({ [searchParamKey]: search, [genreParamKey]: genre });
  };

  const formik = useFormik({
    initialValues: {
      search: '',
      genre: '',
    },
    onSubmit,
  });
  const movieOptions = getGenresOptions(useSelector(selectMovieGenres));
  const tvOptions = getGenresOptions(useSelector(selectTvGenres));

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <input
        name="search"
        type="text"
        defaultValue={search || ''}
        onChange={formik.handleChange}
      />
      <label className="filter__movie-genres">
        <span>Movie genres</span>
        <Select
          closeMenuOnSelect={false}
          isMulti={true}
          options={movieOptions}
          name="genres"
          onChange={choices => {
            const values = choices.map(choice => choice.value);
            formik.setFieldValue('genre', values.toString());
          }}
          placeholder="Choose genres"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieFilter;
