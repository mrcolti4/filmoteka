import clsx from 'clsx';
import { motion } from 'framer-motion';

import styled from './FadeIn.module.css';
import { loaderBox } from '.';
import AnimatedText from 'components/AnimatedText/AnimatedText';

const Loader = () => {
  return (
    <motion.div
      className={clsx(styled.loaderWrapper)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className={clsx(styled.loaderText)}>
        <AnimatedText text="Loading..." />
      </motion.div>
      <motion.div
        className={clsx(styled.loaderBox)}
        animate={loaderBox.animate}
        transition={loaderBox.transition}
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
