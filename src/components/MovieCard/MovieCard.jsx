import { Link, useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import styled from './MovieCard.module.css';
import clsx from 'clsx';

const MovieCard = ({ data, type }) => {
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

  const mediaType = media_type || type;

  return (
    <>
      <Link
        className={clsx(styled.movie__link, styled.movie__thumb)}
        to={`/movies/${mediaType}/${id}`}
        state={{ from: location, media_type }}
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
            to={`/movies/${mediaType}/${id}`}
            state={{ from: location, media_type }}
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
