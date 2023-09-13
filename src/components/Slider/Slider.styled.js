import { styled } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const StyledSlide = styled(SwiperSlide)`
  color: #fff;
  background: url(${props => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  height: 900px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .slide__descr {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    bottom: 250px;
    position: relative;
    z-index: 5;
  }
  .slide__title {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .slide__original_title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .slide__text {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .slide__genres {
  }

  .slide__details-link {
    display: inline-flex;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      background-color: #fff;
      border-color: #000;
      color: #000;
    }
  }
`;
