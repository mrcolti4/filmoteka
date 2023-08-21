export const imageExists = ({ target }) => {
  target.onerror = null; // prevents looping
  target.src =
    'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
};
