import SimilarSlide from 'components/Slider/SimilarSlide/SimilarSlide';
import Slider from 'components/Slider/Slider';
import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import React from 'react';

function SimilarList({ data }) {
  const sortedMovies = SortAPI.sortMovieByRating(data);

  return (
    <>
      <h3>Similar movies</h3>
      <Slider slidesPerView={6} spaceBetween={50}>
        {sortedMovies?.map(film => {
          return <SimilarSlide key={film.id} data={film} />;
        })}
      </Slider>
    </>
  );
}

export default SimilarList;
