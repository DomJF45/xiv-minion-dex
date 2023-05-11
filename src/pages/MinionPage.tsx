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
import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  Link
} from 'react-router-dom';
import Minion from '../components/minions/Minion';
import Verminion from '../components/minions/Verminion';
import { iMinion } from '../interfaces/minion.interface';
import { getMinionById } from '../api/utils';

const MinionPage = () => {

  const [minion, setMinion] = useState<iMinion>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  const { minionId } = useParams();

  const text = useColorModeValue('light.text', 'dark.text');

  const getMinion = useCallback(async () => {
    if (minionId) {
      const res = await getMinionById(minionId);
      setMinion(res);
    }
  }, [minionId]);

  useEffect(() => {
    try {
      // fetch(`https://ffxivcollect.com/api/minions/${minionId}`)
      //   .then((res) => res.json())
      //   .then((actualData) => {
      //     setMinion(actualData);
      //   })
      //   .finally(() => setLoading(false))
      getMinion().finally(() => setLoading(false));
    } catch (err: unknown) {
      setError(err);
      console.log(error);
    }
  }, [minionId, error, getMinion])

  console.log(minion);

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
      <Breadcrumb fontSize={'xl'} color={text} separator={'>'} alignSelf={'start'}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={'/'}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <HStack justifyContent={'space-between'}>
              <Text>
                { !loading ? minion?.name : 'Loading...'}
              </Text>
              <Image src={minion?.icon} width={[6, 6]} />
            </HStack>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box
        display={'flex'}
        flexDir={['column', 'row']}
        width={['100%', '1150px']}
        justifyContent={'space-between'}
        gap={5}
      >
        {
          loading || !minion ?
          (<Text>Loading...</Text>)
          :
          (
            <>
              <Minion minion={minion} />
              <Verminion minion={minion} verminion={minion?.verminion} />
            </>
          )
        }
      </Box>
    </Box>
  )
}

export default MinionPage;
