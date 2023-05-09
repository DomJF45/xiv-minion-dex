import { useState, useEffect} from 'react';
import {
  Text,
  Button,
} from '@chakra-ui/react';
import Minions from '../components/Minions';
import { searchMinion } from '../api/utils';
import useDebounce from '../hooks/useDebounce';

const Home = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(12);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 500);

  const getAllMinions = async () => {
    const res = await searchMinion(debouncedSearch, load);
    setData(res);
  }

  useEffect(() => {
    try {
      getAllMinions().finally(() => setLoading(false));
    } catch (err) {
      console.log(err);
    }
  }, [debouncedSearch, load]);

  const handleSearch = () => {
    setSearch('');
  }

  console.log(data.length, load);
  return (
    <>
      {/* Components Here */}
      { loading ?
        (<Text>Loading</Text>)
        :
        (<Minions minions={data} search={search} setSearch={setSearch} handleSearch={handleSearch} />)
      }
      <Button isLoading={loading} loadingText={'Loading'} isDisabled={load > data.length} fontSize={'xl'} onClick={() => setLoad((prev) => prev + 12)}>Load More</Button>
    </>
  )
}

export default Home;
