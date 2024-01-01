import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
    const response = await axios.get('http://localhost:4000/superheroes');
    return response?.data;
  };

  const fetchFriends = async () => {
    const response = await axios.get('http://localhost:4000/friends');
    return response?.data;
  };

const ParallelQueries = () => {
    const {data: superHeroes} = useQuery('super-heroes', fetchSuperHeroes);
    const {data: friends} =useQuery('friends', fetchFriends)

  return (
    <>    
    <h2>Parallel Queries</h2>
    <h3>Heroes</h3>
    <div>{superHeroes && superHeroes.map(hero => <div>{hero.name}</div>)}</div>
    <h3>Friends</h3>
    <div>{friends && friends.map(friends => <div>{friends.name}</div>)}</div>

    </>
  )
}

export default ParallelQueries