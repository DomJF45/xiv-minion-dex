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
  BehaviorTags
} from './MinionBio';

interface Props {
  minion: any;
  verminion: any;
}

const MinionInspect = (props: Props) => {

  const { minion, verminion } = props;
  const text = useColorModeValue('light.text', 'dark.text');

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
          color={text}
          width={'100%'}
          mb={3}
        >{minion?.name}</Heading>
        <Box
          width={'100%'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'start'}
        >
          <HStack width={'100%'} justifySelf={'start'} gap={3}>              
            <Image 
              src={minion?.image}
              width={['100px', '150px']}
              draggable={false}
              alignSelf={'start'}
            />
            <HStack alignSelf={'start'}>
              {/*  */}
              <Text fontSize={'xl'} color={text}>
                Behavior
                <BehaviorTags type={minion?.behavior?.id}>{minion?.behavior?.name}</BehaviorTags>
              </Text>
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
            </VStack>
          <Image src={minion?.icon} width={[8, 8]} position={'absolute'} top={0.5} right={0.5} />
        </Box>
      </Card>
      <Card 
        width={['100%', '50%']}
        cursor={'default'}
        alignSelf={'start'}
      >
        <StatChart minion={minion} verminion={verminion} />
      </Card>
    </Box>
  )
}

export default MinionInspect;
