import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response?.data;
};

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log('Success', data);
  };
  const onError = (error) => {
    console.log('Error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'superheroes',
    fetchSuperHeroes,
    {
      // cacheTime: 5000
      // staleTime: 30000
      // refetchOnMount: true/false/always
      // refetchOnWindowFocus: true/false/always
      // refetchInterval: false/value in milliseconds
      //refetchInteralInBackground
      // enabled: false,
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.map((hero) => hero.name);
        console.log('superHeroNames', superHeroNames);
        return superHeroNames;
      }
    }
  );

  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  console.log('DATA', data);
  return (
    <>
      {/* <button onClick={refetch}>Fetch</button> */}
      <h2>RQ Super Heroes</h2>

      {/* {data && data.map((hero) => (
          <div key={hero.name}>{hero.name}</div>
        ))} */}
      {data &&
        data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })}
    </>
  );
};

export default RQSuperHeroes;
