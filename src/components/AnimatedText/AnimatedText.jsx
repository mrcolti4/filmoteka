import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const animations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      timeout = setTimeout(async () => {
        await controls.start('hidden');
        controls.start('visible');
      }, 1000);
    };
    show();

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      {text.split('').map((char, charIndex) => (
        <motion.span key={charIndex} variants={animations}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
