import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/LoaderScreen';

import styled from './MovieList.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import { useEffect } from 'react';

const MovieList = ({ movies = [], isFetching = false }) => {
  const location = useLocation();
  const showLoader = isFetching;
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
          movies.map(
            ({
              title,
              id,
              name,
              poster_path,
              vote_average,
              release_date,
              first_air_date,
            }) => {
              return (
                <motion.li
                  variants={childVariants}
                  initial="initial"
                  animate="final"
                  layout
                  className={clsx(styled.movie__item)}
                  key={id}
                >
                  <Link
                    className={clsx(styled.movie__link, styled.movie__thumb)}
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <img
                      src={
                        poster_path &&
                        `https://image.tmdb.org/t/p/w500${poster_path}`
                      }
                      alt={`Poster: ${title}`}
                      className={clsx(styled.movie__poster)}
                    />
                  </Link>
                  <div className={clsx(styled.movie__info)}>
                    <div className={clsx(styled.movie__title)}>
                      <Link
                        className={clsx(styled.movie__link)}
                        to={`/movies/${id}`}
                        state={{ from: location }}
                      >
                        {title ?? name}
                      </Link>
                    </div>
                    <div className={clsx(styled.movie__release)}>
                      {release_date
                        ? release_date?.split('-')[0]
                        : first_air_date?.split('-')[0]}
                    </div>
                  </div>
                  <div className={clsx(styled.movie__rating)}>
                    <div className={clsx(styled.rating__inner)}>
                      <AiFillStar fontSize={'28px'} />
                      {vote_average.toFixed(1)}
                    </div>
                  </div>
                </motion.li>
              );
            }
          )}
      </motion.ul>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  isFetching: PropTypes.bool,
};
