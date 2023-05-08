import {
  Box,
  Divider,
  VStack,
  Heading,
  Text,
  useColorModeValue
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
  const [verminion, setVerminion] = useState();
  const [loading, setLoading] = useState(true);

  const { minionId } = useParams();

  const text = useColorModeValue('#ffffff87', '#ffffff20');

  useEffect(() => {
    try {
      fetch(`https://ffxivcollect.com/api/minions/${minionId}`)
        .then((res) => res.json())
        .then((actualData) => {
          setMinion(actualData);
          setVerminion(actualData.verminion)
        })
        .finally(() => setLoading(false))
    } catch (err) {
      console.log(err);
    }
  }, [minionId])

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
        <Card width={[300, 400]} height={[300, 400]} cursor={'default'}>
          
          {loading ? 
            (<Text>Loading...</Text>)
            :
            (<Minion minion={minion} />)
          }
        </Card>
        <Card width={[300, 400]} height={[300, 400]}>
          {/* Add Stat Chart Here */}
          {
            loading ? 
            (<Text>Loading...</Text>)
            :
            (<StatChart minion={minion} verminion={verminion} />)
          }
        </Card>
      </Box>
      <VStack width={['100%', '800px']} alignItems={'start'}>
        <Heading fontSize={'xl'}>Description</Heading>

        <Divider />
        <Text 
          fontSize={'xl'} 
          backgroundColor={text} 
          width={'100%'} 
          padding={5}
          borderRadius={'8px'}
        >{minion?.enhanced_description}</Text>
      </VStack>
    </Box>
  )
}

export default MinionPage;
