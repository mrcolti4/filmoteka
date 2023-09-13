import React from 'react';
import { StyledSlide } from '../Slider.styled';
import { IMAGE_PATH } from 'js/utils/consts';
import { getSingleGenre } from 'js/utils/getSingleGenre/getSingleGenre';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMovieGenres } from 'redux/slices/genres/selectors';

function HeaderSlide({ data }) {
  const { id, original_title, title, overview, backdrop_path, genre_ids } =
    data;
  const location = useLocation();
  const movieGenres = useSelector(selectMovieGenres);
  return (
    <StyledSlide key={title} $imgUrl={`${IMAGE_PATH}/original${backdrop_path}`}>
      <div className="slide__descr container">
        <h2 className="slide__title">{title}</h2>

        {original_title !== title && (
          <h3 className="slide__original_title">{original_title}</h3>
        )}

        <p className="slide__text">{overview}</p>
        <ul className="movie_genres slide__genres">
          {getSingleGenre(movieGenres, genre_ids).map((genre, index) => {
            return (
              <li key={index} className="movie_genre light">
                {genre}
              </li>
            );
          })}
        </ul>
        <div>
          <Link
            className="slide__details-link"
            to={`/movies/movie/${id}`}
            state={{ from: location }}
          >
            Movie details <TbArrowNarrowRight fontSize={'36px'} />
          </Link>
        </div>
      </div>
    </StyledSlide>
  );
}
// For properly slider work
HeaderSlide.displayName = 'SwiperSlide';
//
export default HeaderSlide;
