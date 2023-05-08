import {
  Box,
  Divider,
  HStack,
  Heading
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import Minion from '../components/Minion';
import Card from '../components/Card';
import StatChart from '../components/StatChart';

const MinionPage = () => {

  const [minion, setMinion] = useState();
  
  const { minionId } = useParams();

  useEffect(() => {
    fetch(`https://ffxivcollect.com/api/minions/${minionId}`)
      .then((res) => res.json())
      .then((actualData) => setMinion(actualData))
  }, [minionId])

  console.log(minion);

  if (!minion) {
    return (
      <Heading>Error</Heading>
    )
  }

  return (
    <Box 
      display={'flex'}
      flexDir={'column'}
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={5}
    >
      <Box 
        display={'flex'}
        flexDir={['column', 'row']}
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={5}
      >
        <Card width={[300, 500]} height={[300, 500]} cursor={'default'}>
          <Minion minion={minion} />
        </Card>
        <Card width={[300, 500]} height={[300, 500]}>
          {/* Add Stat Chart Here */}
          <StatChart minion={minion} verminion={minion.verminion} />
        </Card>
      </Box>
      <HStack width={'100%'} justifyContent={'start'}>
        <Heading fontSize={'xl'}>Description</Heading>
      </HStack>
      <Divider />
    </Box>
  )
}

export default MinionPage;
