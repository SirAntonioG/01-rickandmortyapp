/* eslint-disable react-hooks/exhaustive-deps */
import { reqResApi } from '../api/reqRes';
import { useEffect, useState } from 'react';
import { ReqResCharacters, Character } from '../interfaces/reqRes';
// import axios from 'axios';

export const useAllCharacters = (baseUrl: string) => {
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

// export const useFetch = (baseUrl: string) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     refetch();
//   }, []);

//   const refetch = () => {
//     setLoading(true);
//     axios
//       .get(baseUrl)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return { data, loading, error, refetch };
// };
