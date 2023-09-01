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
