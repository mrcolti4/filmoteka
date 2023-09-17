export const getUnique = (arr = [], id) => {
  return arr.every(item => item.id !== id);
};
