import { useCallback, useState } from 'react';

export const useData = () => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFecthing] = useState(false);
  const [error, setError] = useState('');

  const getData = useCallback(async requestFunction => {
    setIsFecthing(true);
    try {
      const data = await requestFunction;
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFecthing(false);
    }
  }, []);

  return { data, isFetching, error, getData };
};
