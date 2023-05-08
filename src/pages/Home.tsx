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
  const [data, setData] = useState();
  const [load, setLoad] = useState(12);
  const { toggleColorMode } = useColorMode();

  const handleLoad = () => {
    setLoad((prev) => prev + 12);
  }

  useEffect(() => {
    fetch(`https://ffxivcollect.com/api/minions?limit=${load}`)
      .then((res) => res.json())
      .then((actualData) => setData(actualData.results));
  }, [load])

  console.log(data);
  return (
    <>
      <Box>
        <Heading
          color={useColorModeValue('light.text', 'dark.text')}
        >Minion-Dex</Heading>
        <Text fontSize={'xl'} textAlign={'end'} ><span style={{position: 'relative', paddingRight: '10px'}}>From Final Fantasy XIV <span style={{fontSize: '.7rem', position: 'absolute', top: 0, right: 0.5}}>&copy;</span></span></Text>
      </Box>
      <Divider />
      {/* Components Here */}
      <Minions minions={data} />
      <Button fontSize={'xl'} onClick={handleLoad}>Load More</Button>
      <Button fontSize={'xl'} onClick={toggleColorMode}>Toggle</Button>
    </>
  )
}

export default Home;
