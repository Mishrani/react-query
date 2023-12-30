import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response?.data; 
};

const RQSuperHeroes = () => {

  const { isLoading, data, isError, error } = useQuery('superheroes', fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>
        {data.map((hero) => (
          <div key={hero.name}>{hero.name}</div>
        ))}
      </h2>
    </>
  );
};

export default RQSuperHeroes;
