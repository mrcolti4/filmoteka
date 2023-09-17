import { Swiper } from 'swiper/react';
import * as ReactDOMServer from 'react-dom/server';
import 'swiper/css';

const Slider = ({ children, ...settings }) => {
  return <Swiper {...settings}>{children}</Swiper>;
};

export default Slider;
