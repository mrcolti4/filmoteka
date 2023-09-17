import SimilarSlide from 'components/Slider/SimilarSlide/SimilarSlide';
import Slider from 'components/Slider/Slider';
import { SortAPI } from 'js/utils/SortAPI/SortAPI';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SimilarList({ data }) {
  const sortedMovies = SortAPI.sortMovieByRating(data);

  return (
    <>
      <h3>Similar movies</h3>
      <Slider
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={6}
        slidesPerGroup={6}
        allowTouchMove={false}
        spaceBetween={50}
      >
        {sortedMovies?.map(film => {
          return <SimilarSlide key={film.id} data={film} />;
        })}
      </Slider>
    </>
  );
}

export default SimilarList;
