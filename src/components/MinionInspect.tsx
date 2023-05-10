import Card from './Card';
import Minion from './Minion';
import StatChart from './StatChart';
import {
  Box, 
  SimpleGrid,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
  HStack
} from '@chakra-ui/react';
import {
  MinionInfo,
  MinionHeader,
  MinionDesc,
  BehaviorTags,
  PatchTag
} from './MinionBio';
import RaceTag from './RaceTag';
import { TiStarFullOutline } from 'react-icons/ti';

interface Props {
  minion: any;
  loading: boolean;
}

const MinionInspect = (props: Props) => {

  const { minion, loading } = props;
  const verminion = minion?.verminion;
  const text = useColorModeValue('light.text', 'dark.text');

  console.log(verminion);  

  return (
    <Box
      display={'flex'}
      flexDir={['column', 'row']}
      width={['100%', '1150px']}
      justifyContent={'space-between'}
      gap={5}
    >
      <Card 
        width={'100%'}
        cursor={'default'}
        padding={5}
      >
        <Heading
          fontSize={'xl'}
          color={'dark.text'}
          width={'100%'}
          mb={3}
        >{minion?.name}</Heading>
        <Box
          width={'100%'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'start'}
        >
          <HStack width={'100%'} gap={3}> 
            <Image 
              src={minion?.image}
              width={['100px', '150px']}
              draggable={false}
              alignSelf={'start'}
            />
            <HStack alignSelf={'start'}>
              <VStack>
                <Text fontSize={['md', 'xl']} color={'dark.text'}>
                  Behavior
                </Text>
                <BehaviorTags type={minion?.behavior?.id}>{minion?.behavior?.name}</BehaviorTags>

              </VStack>
              <VStack>
                <Text fontSize={['md', 'xl']}>
                  Race
                </Text>
                <RaceTag race={minion?.race?.name} raceId={minion?.race.id} />
              </VStack>
              <VStack fontSize={['md', 'xl']}>
                <Text>
                  Patch
                </Text>
                <PatchTag>{minion?.patch}</PatchTag>
              </VStack>
            </HStack>
          </HStack>
          <VStack
              alignSelf={'start'}
              gap={5}
            >
              <MinionInfo>
                <MinionHeader>Description</MinionHeader>
                <MinionDesc>{minion?.description}</MinionDesc>
              </MinionInfo>

              <MinionInfo>
                <MinionHeader>Source</MinionHeader>
                <MinionDesc>{minion?.sources?.map((source, index: number) => <Text key={index}>{source?.text}</Text>)}</MinionDesc>
              </MinionInfo>

              <MinionInfo>
                <MinionHeader>Journal</MinionHeader>
                <MinionDesc>{minion?.enhanced_description}</MinionDesc>
              </MinionInfo>

              <MinionInfo>
                <MinionHeader>Tooltip</MinionHeader>
                <MinionDesc>{minion?.tooltip}</MinionDesc>
              </MinionInfo>
            </VStack>
          </Box>
      </Card>
      <Card 
        width={['100%', '50%']}
        cursor={'default'}
        alignSelf={'start'}
        padding={5}
      >
        <Heading fontSize={'xl'} color={'dark.text'} width={'89%'}>Verminion Stats</Heading>
        <HStack justifyContent={'space-between'}>
          <VStack alignItems={'start'}>
            <Text>HP</Text>
            <Text>{verminion?.hp}</Text>
          </VStack>
          <VStack alignItems={'start'}>
            <Text>Speed</Text>
            <HStack pt={0}>
              {Array.from(Array(verminion?.speed), (star, index: number) => (
                <TiStarFullOutline style={{margin: 4}} key={index} />
              ))}
            </HStack>
          </VStack>
          <VStack alignItems={'start'}>
            <Text>
              Attack
            </Text>
            <Text>{verminion?.attack}</Text>
          </VStack>
          <VStack alignItems={'start'}>
            <Text>
              Defense
            </Text>
            <Text>
              {verminion?.defense}
            </Text>
          </VStack>
          <VStack alignItems={'start'}>
            <Text>
              Cost
            </Text>
            <Text>
              {verminion?.cost}
            </Text>
          </VStack>
        </HStack>
        <StatChart minion={minion} verminion={verminion} />

      </Card>
    </Box>
  )
}

export default MinionInspect;
