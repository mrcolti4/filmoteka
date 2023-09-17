const { searchParamKey, genreParamKey } = require('js/utils/consts');
const { useSearchParams } = require('react-router-dom');

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const genre = searchParams.get(genreParamKey);

  return [search, genre, setSearchParams];
};
