import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { ReqResCharacters, Result } from '../interfaces/reqRes';

export const useFetch = (baseUrl: string) => {
  const [data, setData] = useState<Result[]>([]);

  const getData = async () => {
    const res = await reqResApi.get<ReqResCharacters>(baseUrl);
    setData(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
