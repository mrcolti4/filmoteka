export const isUnique = (arr = [], id) => {
  return arr.every(item => item.id !== id);
};
