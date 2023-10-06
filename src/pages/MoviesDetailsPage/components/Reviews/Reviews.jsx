import { useData } from 'js/useData/useData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import styled from './Reviews.module.css';
import { childVariants, routeVariants } from 'js/AnimatedList/AnimatedList';
import Loader from 'components/Loader/LoaderScreen';
import MovieAPI from 'js/API_requests/MoviesAPI';
const Reviews = () => {
  const { mediaType, movieId } = useParams();
  const url = `https://api.themoviedb.org/3/${mediaType}/${movieId}/reviews`;
  const { data, isFetching, error, getData } = useData();

  useEffect(() => {
    getData(MovieAPI.getMovieDetail(url));
  }, [getData, url]);
  return (
    <>
      {Boolean(error) && error.message}
      <motion.ul variants={routeVariants} initial="initial" animate="final">
        {Boolean(data?.results?.length) &&
          data?.results?.map(({ author, content, id }) => {
            return (
              <motion.li
                initial="initial"
                animate="final"
                variants={routeVariants}
                className={styled.reviews_item}
                key={id}
              >
                <p className={styled.reviews_item_title}>Author: {author}</p>
                <p>{content}</p>
              </motion.li>
            );
          })}
        {!Boolean(data?.results?.length) && (
          <li>
            <span>There are no reviews yet</span>
          </li>
        )}
      </motion.ul>
    </>
  );
};

export default Reviews;
