import { useState, useEffect, useCallback} from 'react';
import {
  Text,
  Button,
} from '@chakra-ui/react';
import Minions from '../components/minions/Minions';
import { searchMinion } from '../api/utils';
import useDebounce from '../hooks/useDebounce';
import { iMinion } from '../interfaces/minion.interface';

const Home = () => {
  const [data, setData] = useState<iMinion[]>([]);
  const [load, setLoad] = useState(12);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 500);
  const getAllMinions = useCallback(async () => {
    const res = await searchMinion(debouncedSearch, load);
    setData(res);
  }, [debouncedSearch, load]);

  useEffect(() => {
    try {
      getAllMinions().finally(() => setLoading(false));
    } catch (err) {
      console.log(err);
    }
    console.log('render')
  }, [debouncedSearch, load, getAllMinions]);

  console.log(data.length, load);
  return (
    <>
      { loading ?
        (<Text>Loading</Text>)
        :
        (<Minions minions={data} search={search} setSearch={setSearch} />)
      }
      <Button isLoading={loading} loadingText={'Loading'} isDisabled={load > data.length} fontSize={'xl'} onClick={() => setLoad((prev) => prev + 12)}>Load More</Button>
    </>
  )
}

export default Home;
