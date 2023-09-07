import { moviePageVariants } from 'js/AnimatedList/AnimatedList';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import styled from './OrchestrationList.module.css';
import React from 'react';

const OrchestrationList = ({ children }) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={moviePageVariants.list}
      className={clsx(styled.movie_descr)}
    >
      {children?.map((item, i) => {
        const listItem = React.cloneElement(item, { custom: i, key: i });
        return listItem;
      })}
    </motion.ul>
  );
};

export default OrchestrationList;
