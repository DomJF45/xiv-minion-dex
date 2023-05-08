import { useEffect, useState } from 'react'
import { Box, Heading, Text, useColorMode, useColorModeValue, Button, SimpleGrid, Divider } from '@chakra-ui/react';
import Card from './components/Card';
import Minion from './components/Minion';

function App() {
  
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
    <Box
      minH={'100vh'}
      padding={10}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      backgroundColor={useColorModeValue('light.bg', 'dark.bg')}
      border={'4px solid'}
      borderColor={useColorModeValue('light.border', 'dark.border')}
      overflowX={'hidden'}
      transition={'ease-in-out'}
      transitionDuration={'200ms'}
      gap={10}
    >
      <Box>
        <Heading
          color={useColorModeValue('light.text', 'dark.text')}
        >Minion-Dex</Heading>
        <Text fontSize={'xl'} textAlign={'end'} >From Final Fantasy XIV</Text>
      </Box>
      <Divider />
      {/* Components Here */}
      
      <SimpleGrid columns={[1,1,4]} height={'100%'} spacing={10}>
        {data && 
          data.map((minion) => (
            <Card key={minion.id}>
              <Minion minion={minion} />
            </Card>
          ))
        }
      </SimpleGrid>
      <Button fontSize={'xl'} onClick={handleLoad}>Load More</Button>
      <Button fontSize={'xl'} onClick={toggleColorMode}>Toggle</Button>
    </Box>
  )
}

export default App
