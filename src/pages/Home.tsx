import { useState, useEffect, useCallback} from 'react';
import {
  Text,
  Button,
  HStack
} from '@chakra-ui/react';
import Minions from '../components/minions/Minions';
import { searchMinion, filterMinionsByRaceId } from '../api/utils';
import useDebounce from '../hooks/useDebounce';
import { iMinion } from '../interfaces/minion.interface';
import SearchBar from '../components/utils/SearchBar';
import Filter from '../components/utils/Filter';
const Home = () => {
  const [data, setData] = useState<iMinion[]>([]);
  const [load, setLoad] = useState(12);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<iMinion[]>([]);
  const debouncedSearch = useDebounce<string>(search, 500);

  const getAllMinions = useCallback(async () => {
    const res = await searchMinion(debouncedSearch, load);
    setData(res);
  }, [debouncedSearch, load]);

  const filterMinions = useCallback(async (raceId: number): Promise<void> => {
    setSearch('');
    setLoading(true);
    setLoad(12);
    const res = await filterMinionsByRaceId(raceId).finally(() => setLoading(false));

    const filtered = res.filter((minion) => {
      return minion.race.id === raceId;
    })

    setFilteredData(filtered);
  }, []);

  useEffect(() => {
    try {
      getAllMinions().finally(() => setLoading(false));
    } catch (err) {
      console.log(err);
    }
    console.log('render')
  }, [debouncedSearch, load, getAllMinions, filterMinions]);

  console.log(data.length, load);
  return (
    <>
      { loading ?
        (<Text>Loading</Text>)
        :
        (
          <>
            <HStack 
              width='100%'
              justifyContent={'space-between'}
            >
              <SearchBar search={search} setSearch={setSearch} />
              <Filter filter={filter} setFilter={setFilter} filterMinions={filterMinions} />
            </HStack>
            <Minions minions={ search ? data : filter ? filteredData.slice(0, load) : data} />
          </>
        )
      }
      <Button isLoading={loading} loadingText={'Loading'} isDisabled={filter ? load > filteredData.length : load > data.length} fontSize={'xl'} onClick={() => setLoad((prev) => prev + 12)}>Load More</Button>
    </>
  )
}

export default Home;
