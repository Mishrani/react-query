import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response?.data;
};

const RQSuperHeroes = () => {
  const onSuccess = () => {
    console.log('Success');
  }
  const onError = () => {
    console.log('Error');
  }
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
      onSuccess: onSuccess,
      onError: onError
    }
  );

  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
    {/* <button onClick={refetch}>Fetch</button> */}
      <h2>RQ Super Heroes</h2>

        {data && data.map((hero) => (
          <div key={hero.name}>{hero.name}</div>
        ))}
    </>
  );
};

export default RQSuperHeroes;
