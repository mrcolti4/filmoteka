import Pagination from '@mui/material/Pagination';
import { pageParamKey } from 'js/utils/consts';
import { useSearch } from 'pages/MoviesPage/useSearch';
import { useSelector } from 'react-redux';
import { selectTotalPages } from 'redux/slices/film/selectors';

const MoviePagination = () => {
  const { searchParams, page, setSearchParams } = useSearch();
  const pageCount = useSelector(selectTotalPages);
  return (
    <>
      <Pagination
        count={pageCount}
        page={Number(page)}
        onChange={(event, value) => {
          const params = {};
          for (const param of searchParams.entries()) {
            params[param[0]] = param[1];
          }
          setSearchParams({ ...params, [pageParamKey]: value });
        }}
      />
    </>
  );
};

export default MoviePagination;
