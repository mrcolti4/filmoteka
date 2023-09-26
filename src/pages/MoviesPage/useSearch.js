import {
  searchParamKey,
  genreParamKey,
  mediaTypeParamKey,
} from 'js/utils/consts';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const genre = searchParams.get(genreParamKey);
  const mediaType = searchParams.get(mediaTypeParamKey);

  return { search, genre, mediaType, setSearchParams };
};
