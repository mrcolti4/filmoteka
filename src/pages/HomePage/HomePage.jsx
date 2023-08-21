import { useEffect, useState } from 'react';
import clsx from 'clsx';

import MovieList from 'components/MovieList/MovieList';

import MovieAPI from 'js/API_requests/MoviesAPI';
import { useData } from 'js/useData/useData';
import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import { LocationProvider } from 'js/utils/LocationProvider/LocationProvider';

import styled from './HomePage.module.css';
import Slider from 'components/Slider/Slider';

const HomePage = () => {
  const { data, isFetching, getData } = useData();
  const [timeWindow, setTimeWindow] = useState('day');
  const [mediaType, setMediaType] = useState('all');

  useEffect(() => {
    getData(MovieAPI.getTrendMovies(mediaType, timeWindow));
  }, [getData, mediaType, timeWindow]);

  const onFilterClick = ({ target }) => {
    if (target.dataset?.homefilter) {
      const dataTimeSort = target.dataset?.timesort;
      const dataMediaSort = target.dataset?.mediasort;
      target.dataset?.timesort
        ? setTimeWindow(dataTimeSort)
        : setMediaType(dataMediaSort);
    }
  };

  const moviesList = SortAPI.sortMovieByRating(data);

  return (
    <main>
      <Slider />
      <div className="container">
        <h2 className="home_header">Trend movies</h2>
        <div className={clsx(styled.home__filter_wrapper)}>
          <ul className={clsx(styled.home__filters)}>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-timesort="day"
                data-homefilter
                className="home__filter"
              >
                Popular today
              </button>
            </li>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-timesort="week"
                data-homefilter
                className="home__filter"
              >
                Popular this week
              </button>
            </li>
          </ul>
          <ul className={clsx(styled.home__filters)}>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-mediasort="all"
                data-homefilter
                className="home__filter"
              >
                All categories
              </button>
            </li>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-mediasort="movie"
                data-homefilter
                className="home__filter"
              >
                Popular movies
              </button>
            </li>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-mediasort="tv"
                data-homefilter
                className="home__filter"
              >
                Popular on TV
              </button>
            </li>
            <li className="home__item">
              <button
                onClick={onFilterClick}
                data-mediasort="person"
                data-homefilter
                className="home__filter"
              >
                Popular peoples
              </button>
            </li>
          </ul>
        </div>
        <LocationProvider>
          <MovieList movies={moviesList} isFetching={isFetching} />
        </LocationProvider>
      </div>
    </main>
  );
};

export default HomePage;
