import MovieCard from 'components/MovieCard/MovieCard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const SimilarSlide = ({ data }) => {
  const { mediaType } = useParams();
  return (
    <SwiperSlide>
      <MovieCard data={data} type={mediaType} />
    </SwiperSlide>
  );
};

SimilarSlide.displayName = 'SwiperSlide';

export default SimilarSlide;
