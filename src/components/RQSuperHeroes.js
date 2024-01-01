import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log('Success', data);
  };
  const onError = (error) => {
    console.log('Error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

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
