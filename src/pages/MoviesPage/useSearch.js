import {
  searchParamKey,
  genreParamKey,
  mediaTypeParamKey,
  pageParamKey,
} from 'js/utils/consts';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey);
  const genre = searchParams.get(genreParamKey);
  const mediaType = searchParams.get(mediaTypeParamKey);
  const page = searchParams.get(pageParamKey);

  return { search, genre, mediaType, page, searchParams, setSearchParams };
};
