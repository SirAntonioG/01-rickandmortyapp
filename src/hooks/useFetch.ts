/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';

export const useFetch = <T>(baseUrl: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await reqResApi.get<T>(baseUrl);
    setData(res.data);
  };

  return data;
};
