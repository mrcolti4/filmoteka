import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import styled from './MovieList.module.css';
import { routeVariants } from 'js/AnimatedList/AnimatedList';
import MovieListItem from './MovieListItem';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ movies = [], isFetching = false, type }) => {
  const showMovies = movies?.length > 0;

  return (
    <>
      <motion.ul
        variants={routeVariants}
        initial="initial"
        animate="final"
        className={clsx(styled.movie__list)}
      >
        {showMovies &&
          movies.map(film => {
            return (
              <MovieListItem key={film.id}>
                <MovieCard data={film} type={type} />
              </MovieListItem>
            );
          })}
      </motion.ul>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  isFetching: PropTypes.bool,
};
