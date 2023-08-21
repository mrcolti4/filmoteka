export const getSingleGenre = (allGenres = [], movieGenres = []) => {
  const genresName = [];

  movieGenres.forEach(id => {
    allGenres?.map(obj => {
      if (obj.id === id) {
        genresName.push(obj.name);
        return;
      }
    });
  });

  return genresName;
};
