import { Swiper } from 'swiper/react';
import 'swiper/css';

const Slider = ({ children, ...settings }) => {
  return <Swiper {...settings}>{children}</Swiper>;
};

export default Slider;
