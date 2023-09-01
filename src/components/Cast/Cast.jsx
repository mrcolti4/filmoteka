import clsx from 'clsx';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Loader from 'components/Loader/LoaderScreen';
import { useData } from 'js/useData/useData';

import styled from './Cast.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import MovieAPI from 'js/API_requests/MoviesAPI';
import { imageExists } from 'js/utils/ImageNotFound/ImageNotFound';

const Cast = () => {
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const { data, isFetching, error, getData } = useData();

  const { cast } = data ?? {};

  useEffect(() => {
    getData(MovieAPI.getMovieDetail(url));
  }, [getData, url]);

  return (
    <>
      {isFetching && <Loader />}
      {Boolean(error) && error.message}
      <motion.ul
        variants={routeVariants}
        initial="initial"
        animate="final"
        className={clsx(styled.cast)}
      >
        {cast &&
          cast
            .slice(0, 10)
            .map(({ id, profile_path, original_name, character }) => {
              return (
                <motion.li variants={childVariants} key={id}>
                  <img
                    onError={imageExists}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={original_name}
                    className={clsx(styled.cast__img)}
                  />
                  <p>{original_name}</p>
                  <p>Character: {character}</p>
                </motion.li>
              );
            })}
      </motion.ul>
    </>
  );
};

export default Cast;
