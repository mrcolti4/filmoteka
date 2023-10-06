import { useEffect, useState } from 'react';
import clsx from 'clsx';

import MovieList from 'components/MovieList/MovieList';
import Slider from 'components/Slider/Slider';

import { SortAPI } from 'js/utils/SortAPI/SortAPI';

import styled from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMoviesData,
  selectMoviesError,
  selectMoviesIsFetching,
} from 'redux/slices/film/selectors';
import { getTrendMovies } from 'redux/slices/film/thunks';
import { Autoplay } from 'swiper/modules';
import MovieAPI from 'js/API_requests/MoviesAPI';
import { useData } from 'js/useData/useData';
import HeaderSlide from 'components/Slider/HeaderSlide/HeaderSlide';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [timeWindow, setTimeWindow] = useState('day');
  const [mediaType, setMediaType] = useState('all');

  // Main movie list
  const dispatcher = useDispatch();
  const trendMovies = useSelector(selectMoviesData);
  const isFetching = useSelector(selectMoviesIsFetching);
  const error = useSelector(selectMoviesError);

  // Slider movie list
  const { data: sliderMovies, getData: setSliderMovies } = useData();
  const { results: sliderList } = sliderMovies ?? {};

  useEffect(() => {
    setSliderMovies(MovieAPI.getCinemaMovies());
    dispatcher(getTrendMovies({ mediaType, timeWindow }));
  }, [dispatcher, mediaType, timeWindow, setSliderMovies]);

  const handleFilterClick = ({ target }, queryString) => {
    const activeBtn = document.querySelector(queryString);
    if (target && target.nodeName === 'BUTTON') {
      if (target.dataset?.homefilter) {
        const dataTimeSort = target.dataset?.timesort;
        const dataMediaSort = target.dataset?.mediasort;
        target.dataset?.timesort
          ? setTimeWindow(dataTimeSort)
          : setMediaType(dataMediaSort);
      }
      activeBtn?.classList.remove(styled.active);
      target?.classList.add(styled.active);
    }
  };

  const moviesList = SortAPI.sortMovieByRating(trendMovies);
  return (
    <main>
      {isFetching && <Loader />}
      {sliderList && (
        <Slider modules={[Autoplay]} slidesPerView={1} autoplay={true}>
          {sliderList?.map(film => {
            return <HeaderSlide key={film.id} data={film} />;
          })}
        </Slider>
      )}

      <div className="container">
        <h2 className="home_header">Trend movies</h2>
        <div className={clsx(styled.home__filter_wrapper)}>
          <ul
            onClick={e => {
              handleFilterClick(
                e,
                `button.${clsx(styled.active)}[data-timesort]`
              );
            }}
            className={clsx(styled.home__filters, 'filters__time')}
          >
            <li className="home__item">
              <button
                data-timesort="day"
                data-homefilter
                className={clsx(styled.filter__item, styled.active)}
              >
                Popular today
              </button>
            </li>
            <li className="home__item">
              <button
                data-timesort="week"
                data-homefilter
                className={clsx(styled.filter__item)}
              >
                Popular this week
              </button>
            </li>
          </ul>
          <ul
            onClick={e => {
              handleFilterClick(
                e,
                `button.${clsx(styled.active)}[data-mediasort]`
              );
            }}
            className={clsx(styled.home__filters, 'filters__media')}
          >
            <li className="home__item">
              <button
                data-mediasort="all"
                data-homefilter
                className={clsx(styled.filter__item, styled.active)}
              >
                All categories
              </button>
            </li>
            <li className="home__item">
              <button
                data-mediasort="movie"
                data-homefilter
                className={clsx(styled.filter__item)}
              >
                Popular movies
              </button>
            </li>
            <li className="home__item">
              <button
                data-mediasort="tv"
                data-homefilter
                className={clsx(styled.filter__item)}
              >
                Popular on TV
              </button>
            </li>
            <li className="home__item">
              <button
                data-mediasort="person"
                data-homefilter
                className={clsx(styled.filter__item)}
              >
                Popular peoples
              </button>
            </li>
          </ul>
        </div>
        <MovieList movies={moviesList} isFetching={isFetching} />
      </div>
    </main>
  );
};

export default HomePage;
