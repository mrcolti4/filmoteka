export const routeVariants = {
  initial: {
    y: '100px',
    opacity: 0,
  },
  final: {
    y: '0px',
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.3,
    },
  },
};
export const childVariants = {
  initial: {
    opacity: 0,
    y: '50px',
  },
  final: {
    opacity: 1,
    y: '0px',
    transition: {
      duration: 0.3,
    },
  },
};

export const moviePageVariants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  final: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  list: {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    hidden: { opacity: 0 },
  },
  item: {
    visible: i => ({
      opacity: 1,
      x: '0%',
      transition: {
        delay: i * 0.3,
        mass: 0.3,
      },
    }),
    hidden: { opacity: 0, x: '100%' },
  },
};
