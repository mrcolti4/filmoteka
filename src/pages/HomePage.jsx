import { useEffect } from 'react';

import MovieList from 'components/MovieList/MovieList';

import { getTrendMovies } from 'js/API_requests/getTrendMovies';
import { useData } from 'js/useData/useData';

const HomePage = () => {
  const { data, isFetching, getData } = useData();

  useEffect(() => {
    getData(getTrendMovies());
  }, [getData]);

  return (
    <div className="container">
      <h2 className="home_header">Trend movies</h2>
      <MovieList movies={data} isFetching={isFetching} />
    </div>
  );
};

export default HomePage;
