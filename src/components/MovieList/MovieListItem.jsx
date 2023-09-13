import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { setScrollPosition } from 'redux/slices/scroll/slice';
import { childVariants } from 'js/AnimatedList/AnimatedList';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import styled from './MovieList.module.css';

function MovieListItem({ data }) {
  const dispatcher = useDispatch();
  const location = useLocation();
  const {
    title,
    id,
    name,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
    media_type,
  } = data;
  const handleLinkClick = () => {
    dispatcher(setScrollPosition(window.scrollY));
  };

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
        to={`/movies/${media_type}/${id}`}
        state={{ from: location, media_type }}
        onClick={handleLinkClick}
      >
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`Poster: ${title}`}
          className={clsx(styled.movie__poster)}
        />
      </Link>
      <div className={clsx(styled.movie__info)}>
        <div className={clsx(styled.movie__title)}>
          <Link
            className={clsx(styled.movie__link)}
            to={`/movies/${media_type}/${id}`}
            state={{ from: location, media_type }}
            onClick={handleLinkClick}
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

export default MovieListItem;
