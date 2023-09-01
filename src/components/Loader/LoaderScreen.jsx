import { motion } from 'framer-motion';

import styled from './FadeIn.module.css';
import clsx from 'clsx';
const LoaderScreen = () => {
  return (
    <div>
      {/* <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /> */}
      <motion.div
        className={clsx(styled.fade_in)}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.2, 1, 0.3, 1] }}
      >
        Loading... Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellat nesciunt vitae adipisci natus, et, incidunt repellendus
        pariatur architecto corporis facilis ut ad sapiente reprehenderit amet.
        Necessitatibus blanditiis similique natus cupiditate. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Ut quas quibusdam tempore eveniet
        ad? Est magni ullam minus sed eligendi architecto, deserunt laudantium!
        Laboriosam minus vel est fuga, nam numquam?
      </motion.div>
    </div>
  );
};

export default LoaderScreen;
