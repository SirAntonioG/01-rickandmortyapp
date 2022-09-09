import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { Character } from '../interfaces/reqRes';

export const useCharacter = (baseUrl: string) => {
  const [data, setData] = useState<Character>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await reqResApi.get<Character>(baseUrl);
    setData(res.data);
  };

  return data;
};
