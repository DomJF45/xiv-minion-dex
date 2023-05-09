import {
  Box,
  Divider,
  VStack,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import Minion from '../components/Minion';
import Card from '../components/Card';
import StatChart from '../components/StatChart';
import { BehaviorTags, MinionDesc, MinionHeader, MinionInfo } from '../components/MinionBio';
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
      alignItems={'start'}
      gap={5}
    >
      <Breadcrumb fontSize={'xl'} color={text} separator={'>'} alignSelf={'start'}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>{minion?.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      

        {loading ? 
          (<Text>Loading..</Text>)
          :
          (<MinionInspect minion={minion} verminion={verminion} />)
        }

      <MinionInfo>
        <MinionHeader>Description</MinionHeader>
        <MinionDesc>{minion?.description}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Behavior</MinionHeader>
        <BehaviorTags type={minion?.behavior?.id}>{minion?.behavior?.name}</BehaviorTags>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Source</MinionHeader>
        <MinionDesc>{minion?.sources?.map((source) => <Text>{source?.text}</Text>)}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Journal</MinionHeader>
        <MinionDesc>{minion?.enhanced_description}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Tooltip</MinionHeader>
        <MinionDesc>{minion?.tooltip}</MinionDesc>
      </MinionInfo>
    </Box>
  )
}

export default MinionPage;
