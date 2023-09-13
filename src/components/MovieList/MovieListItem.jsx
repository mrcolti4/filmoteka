import React from 'react';
import { motion } from 'framer-motion';
import { childVariants } from 'js/AnimatedList/AnimatedList';
import clsx from 'clsx';

import styled from './MovieList.module.css';

function MovieListItem({ children, id }) {
  return (
    <motion.li
      variants={childVariants}
      initial="initial"
      animate="final"
      layout
      className={clsx(styled.movie__item)}
      key={id}
    >
      {children}
    </motion.li>
  );
}

export default MovieListItem;
