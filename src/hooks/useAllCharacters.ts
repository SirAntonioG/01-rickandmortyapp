/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { ReqResCharacters, Character, Episode } from '../interfaces/reqRes';
// import axios from 'axios';

export const useAllCharacters = (baseUrl: string) => {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await reqResApi.get<ReqResCharacters>(baseUrl);
    const characters = res.data.results;
    const firstEpisodeCharacter = characters.map(async (c) => {
      const url = c.episode[0];
      const res = await reqResApi.get<Episode>(url);
      return res.data;
    });
    const firstEpisodeCharacterData = await Promise.all(firstEpisodeCharacter);
    setData(characters);
  };

  return data;
};
