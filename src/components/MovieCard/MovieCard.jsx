import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setScrollPosition } from 'redux/slices/scroll/slice';

import styled from './MovieCard.module.css';
import clsx from 'clsx';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ data, type }) => {
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

  const dispatcher = useDispatch();
  const location = useLocation();

  const handleLinkClick = () => {
    dispatcher(setScrollPosition(window.scrollY));
  };

  return (
    <>
      <Link
        className={clsx(styled.movie__link, styled.movie__thumb)}
        to={`/movies/${media_type || type}/${id}`}
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
            to={`/movies/${media_type || type}/${id}`}
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
    </>
  );
};

export default MovieCard;
