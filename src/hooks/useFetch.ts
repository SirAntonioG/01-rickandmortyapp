/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';

export const useFetch = <T>(baseUrl: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const getData = async () => {
    try {
      setLoading(true);
      const res = await reqResApi.get<T>(baseUrl);
      setData(res.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        setError('Unspected error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};
