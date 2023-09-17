import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import styled from './MovieDetails.module.css';
import { moviePageVariants } from 'js/AnimatedList/AnimatedList';
import OrchestrationList from 'components/OrchestrationList/OrchestrationList';
import SimilarList from 'components/SimilarList/SimilarList';

const MovieDetails = ({ data, backLinkHref, similar }) => {
  const { title, name, poster_path, vote_average, overview, genres } = data;
  const votes = String(Math.round(vote_average * 10));
  return (
    <>
      <Link className={clsx(styled.movie_back_link)} to={backLinkHref}>
        <TiArrowBackOutline fontSize={'36px'} />
        Go back
      </Link>
      {Boolean(data) && (
        <div className={clsx(styled.movie_item)}>
          <motion.img
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title || name}
            width={!Boolean(poster_path) ? 500 : undefined}
            height={!Boolean(poster_path) ? 750 : undefined}
            className="movie_poster"
            variants={moviePageVariants}
            initial="initial"
            animate="final"
          />
          <OrchestrationList>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={moviePageVariants.item}
              className={clsx(styled.movie_title)}
            >
              {title || name}
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={moviePageVariants.item}
              className={clsx(styled.movie_score)}
            >
              Positive votes: <span>{votes}%</span>
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={moviePageVariants.item}
              className={clsx(styled.movie_details)}
            >
              <h3>Overview</h3>
              <p>{overview}</p>
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={moviePageVariants.item}
              className={clsx(styled.movie_details)}
            >
              <h3>Genres</h3>
              <p className="movie_genres">
                {genres?.map(({ name }, index) => (
                  <a key={index} href="_" className="movie_genre">
                    {name}
                  </a>
                ))}
              </p>
            </motion.li>
          </OrchestrationList>
        </div>
      )}

      {Boolean(similar?.length) && <SimilarList data={similar} />}

      <ul className={clsx(styled.details__list)}>
        <li className={clsx(styled.details__item)}>
          <NavLink
            className={clsx(styled.details__link)}
            to="cast"
            state={{ from: backLinkHref }}
          >
            Cast
          </NavLink>
        </li>
        <li className={clsx(styled.details__item)}>
          <NavLink
            className={clsx(styled.details__link)}
            to="reviews"
            state={{ from: backLinkHref }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
MovieDetails.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
  backLinkHref: PropTypes.object.isRequired,
};
