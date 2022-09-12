/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { Character, Status, Gender, Species } from '../interfaces/reqRes';

const initialCharacter: Character = {
  id: 0,
  name: 'string',
  status: Status.Alive,
  species: Species.Alien,
  type: '',
  gender: Gender.Male,
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  image: '',
  episode: [],
  url: '',
  created: new Date(),
};

export const useCharacter = (baseUrl: string) => {
  const [data, setData] = useState<Character>(initialCharacter);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await reqResApi.get<Character>(baseUrl);
    setData(res.data);
  };

  return data;
};
