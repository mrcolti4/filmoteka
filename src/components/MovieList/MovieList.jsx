import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

import styled from './MovieList.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import { useDispatch, useSelector } from 'react-redux';
import { selectScrollPosition } from 'redux/slices/scroll/selectors';
import { setScrollPosition } from 'redux/slices/scroll/slice';
import MovieListItem from './MovieListItem';

const MovieList = ({ movies = [], isFetching = false }) => {
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
            return <MovieListItem data={film} />;
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
