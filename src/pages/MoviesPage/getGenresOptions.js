export function getGenresOptions(genres) {
  return genres?.map(({ id, name }) => {
    return { value: id, label: name };
  });
}
