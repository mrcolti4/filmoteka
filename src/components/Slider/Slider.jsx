import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbArrowNarrowRight } from 'react-icons/tb';

import { useData } from 'js/useData/useData';
import MovieAPI from 'js/API_requests/MoviesAPI';
import { IMAGE_PATH } from 'js/utils/consts';
import { getSingleGenre } from 'js/utils/getSingleGenre/getSingleGenre';

import { StyledSlide } from './Slider.styled';
import 'swiper/css';

const Slider = () => {
  const { data: sliderMovies, getData: setSliderMovies } = useData();
  const [allGenres, setGenres] = useState(null);
  const location = useLocation();

  const getGenres = useCallback(async () => {
    const data = await MovieAPI.getMovieGenres();
    setGenres(data);
  }, []);

  useEffect(() => {
    setSliderMovies(MovieAPI.getCinemaMovies());
    getGenres();
  }, [setSliderMovies, getGenres]);
  const { results: movieList } = sliderMovies ?? {};

  return (
    <>
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={true}>
        {movieList?.map(
          ({
            id,
            original_title,
            title,
            overview,
            backdrop_path,
            genre_ids,
            media_type,
          }) => {
            return (
              <StyledSlide
                key={title}
                $imgUrl={`${IMAGE_PATH}/original${backdrop_path}`}
              >
                <div className="slide__descr container">
                  <h2 className="slide__title">{title}</h2>

                  {original_title !== title && (
                    <h3 className="slide__original_title">{original_title}</h3>
                  )}

                  <p className="slide__text">{overview}</p>
                  <ul className="movie_genres slide__genres">
                    {getSingleGenre(allGenres, genre_ids).map(
                      (genre, index) => {
                        return (
                          <li key={index} className="movie_genre light">
                            {genre}
                          </li>
                        );
                      }
                    )}
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
        )}
      </Swiper>
    </>
  );
};

export default Slider;
