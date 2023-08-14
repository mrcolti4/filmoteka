import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';

import styled from './MovieDetails.module.css';

const MovieDetails = ({ data, backLinkHref }) => {
  const { title, poster_path, vote_average, overview, genres } = data;
  const votes = String(Math.round(vote_average * 10));
  return (
    <>
      <Link className={clsx(styled.movie_back_link)} to={backLinkHref}>
        <TiArrowBackOutline fontSize={'36px'} />
        Go back
      </Link>
      {Boolean(data) && (
        <div className={clsx(styled.movie_item)}>
          <img
            src={
              poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt={title && title}
            className="movie_poster"
          />
          <div className={clsx(styled.movie_descr)}>
            <h2 className={clsx(styled.movie_title)}>{title}</h2>
            <p className={clsx(styled.movie_score)}>
              Positive votes: <span>{votes}%</span>
            </p>
            <div className={clsx(styled.movie_details)}>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
            <div className={clsx(styled.movie_details)}>
              <h3>Genres</h3>
              <p className={clsx(styled.movie_genres)}>
                {genres?.map(({ name }, index) => (
                  <a key={index} href="_" className={clsx(styled.movie_genre)}>
                    {name}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
MovieDetails.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
  backLinkHref: PropTypes.object.isRequired,
};
