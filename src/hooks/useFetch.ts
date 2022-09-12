/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';

export const useFetch = <T>(baseUrl: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Object | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await reqResApi
      .get<T>(baseUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err: object) => {
        setError(err);
        // console.log('err', err, 'type', typeof err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error };
};
