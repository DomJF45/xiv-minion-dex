import { useState, useEffect} from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import Minions from '../components/Minions';

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [load, setLoad] = useState(12);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { toggleColorMode } = useColorMode();

  const handleLoad = () => {
    setLoad((prev) => prev + 12);
  }

  useEffect(() => {
    
    try {
      fetch(`https://ffxivcollect.com/api/minions?name_en_start=${search}`)
        .then((res) => res.json())
        .then((actualData) => {
          setData(actualData.results.slice(current, current + 12))
        })
        .finally(() => setLoading(false));
  
    } catch (err) {
      console.log(err);
    }

  }, [search, current]);

  const handleSearch = () => {
    setSearch('');
  }

  console.log(data);
  return (
    <>
      {/* Components Here */}
      { loading ?
        (<Text>Loading</Text>)
        :
        (<Minions minions={data} search={search} setSearch={setSearch} handleSearch={handleSearch} />)
      }
      <Button fontSize={'xl'} onClick={() => setCurrent(current + 12)}>Load More</Button>
    </>
  )
}

export default Home;
