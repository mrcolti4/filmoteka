import MovieListItem from 'components/MovieList/MovieListItem';
import React from 'react';

function SimilarList({ data }) {
  return (
    <ul>
      {data?.map(film => {
        return <MovieListItem data={film} />;
      })}
    </ul>
  );
}

export default SimilarList;
