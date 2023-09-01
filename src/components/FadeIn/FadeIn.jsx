import React from 'react';
import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
// import { childVariants } from 'js/AnimatedList/AnimatedList';

// import styled from './FadeIn.module.css';
// import clsx from 'clsx';

export const transition = (Component, isFetching) => {
  return (
    <>
      {Component}
      {/* <motion.div
        className={clsx({ isFetching: styled.fade_out })}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      />
      <motion.div
        className={clsx({ isFetching: styled.fade_out })}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      /> */}
    </>
  );
};

transition.propTypes = {
  className: PropTypes.string,
};
