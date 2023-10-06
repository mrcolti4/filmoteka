import { motion } from 'framer-motion';
import clsx from 'clsx';

import styled from './FadeIn.module.css';

const LoaderScreen = () => {
  return (
    <div>
      <motion.div
        className={clsx(styled.fade_in)}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 5, ease: [0.2, 1, 0.3, 1] }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoaderScreen;
