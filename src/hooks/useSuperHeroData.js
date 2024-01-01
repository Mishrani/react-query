import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroData = async ({ queryKey }) => {
  const heroId = queryKey[1];
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  console.log('Response', response);
  return response;
};

export const useSuperHeroData = (heroId) => {
  return useQuery(['superhero', heroId], fetchSuperHeroData);
};
