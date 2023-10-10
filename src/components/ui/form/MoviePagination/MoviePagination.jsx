import { useSelector } from 'react-redux';
import { selectTotalPages } from 'redux/slices/film/selectors';

import { useSearch } from 'hooks/useSearch';
import { pageParamKey } from 'js/utils/consts';

import Pagination from '@mui/material/Pagination';

const MoviePagination = () => {
  const { searchParams, page, setSearchParams } = useSearch();
  const pageCount = useSelector(selectTotalPages);

  return (
    <>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={Number(page)}
          onChange={(event, value) => {
            console.log(value);
            const params = {};
            for (const param of searchParams.entries()) {
              params[param[0]] = param[1];
            }
            setSearchParams({ ...params, [pageParamKey]: value });
          }}
        />
      )}
    </>
  );
};

export default MoviePagination;
