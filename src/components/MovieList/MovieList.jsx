import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';

import styled from './MovieList.module.css';

const MovieList = ({ movies = [], isFetching = false }) => {
  const location = useLocation();
  const showLoader = isFetching;
  const showMovies = movies?.length > 0;

  return (
    <ul className={clsx(styled.movie_list)}>
      {showLoader && <Loader />}
      {showMovies &&
        !showLoader &&
        movies.map(({ title, id, name }) => {
          return (
            <li className="movie_item" key={id}>
              <Link
                className={clsx(styled.movie_link)}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title ?? name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  isFetching: PropTypes.bool,
};
