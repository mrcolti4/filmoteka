export const isNull = obj => {
  return Object.values(obj).every(value => {
    if (value === null) {
      return true;
    }

    return false;
  });
};
