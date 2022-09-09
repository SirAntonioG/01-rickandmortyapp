import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { ReqResCharacters, Character } from '../interfaces/reqRes';

export const useFetch = (baseUrl: string) => {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await reqResApi.get<ReqResCharacters>(baseUrl);
    setData(res.data.results);
  };

  return data;
};
