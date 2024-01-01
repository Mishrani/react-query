import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response?.data;
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('superheroes', fetchSuperHeroes, {
    // cacheTime: 5000
    // staleTime: 30000
    // refetchOnMount: true/false/always
    // refetchOnWindowFocus: true/false/always
    // refetchInterval: false/value in milliseconds
    //refetchInteralInBackground
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.map((hero) => hero.name);
    //   console.log('superHeroNames', superHeroNames);
    //   return superHeroNames;
    // }
  });
};
