import { IMAGE_PATH } from 'js/utils/consts';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecentlyWatchedMovies } from 'redux/slices/film/selectors';

import SimilarSlide from 'components/Slider/SimilarSlide/SimilarSlide';
import Slider from 'components/Slider/Slider';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
const RecentlyWatched = () => {
  const recentlyWatched = useSelector(selectRecentlyWatchedMovies);
  return (
    <>
      {Boolean(recentlyWatched?.length > 1) && (
        <aside className="recently">
          <h3>Recently watched</h3>
          <Slider
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerGroup={5}
            allowTouchMove={false}
            slidesPerView={5}
            spaceBetween={100}
          >
            {recentlyWatched?.map(film => {
              return <SimilarSlide key={film.id} data={film} />;
            })}
          </Slider>
        </aside>
      )}
    </>
  );
};

export default RecentlyWatched;
