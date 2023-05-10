import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import MinionInspect from '../components/MinionInspect';

const MinionPage = () => {

  const [minion, setMinion] = useState();
  const [verminion, setVerminion] = useState();
  const [loading, setLoading] = useState(true);

  const { minionId } = useParams();

  const text = useColorModeValue('light.text', 'dark.text');

  useEffect(() => {
    try {
      fetch(`https://ffxivcollect.com/api/minions/${minionId}`)
        .then((res) => res.json())
        .then((actualData) => {
          setMinion(actualData);
          setVerminion(actualData?.verminion)
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
      alignItems={'start'}
      gap={5}
    >
      { loading || minion === undefined ?
  
        (<Text>Loading..</Text>)
        :
        (
          <>
            <Breadcrumb fontSize={'xl'} color={text} separator={'>'} alignSelf={'start'}>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                  <HStack justifyContent={'space-between'}>
                    <Text>
                      { !loading ? minion?.name : 'Loading...'}
                    </Text>
                    <Image src={minion?.icon} width={[6, 6]} />
                  </HStack>
                </BreadcrumbLink>
              </BreadcrumbItem>
              </Breadcrumb>
            <MinionInspect minion={minion} loading={loading} />
          </>
        )
      }
    </Box>
  )
}

export default MinionPage;
