import { 
  Box, 
  Heading, 
  Image,
  HStack,
  Text, 
  useColorModeValue 
} from "@chakra-ui/react"
import {
  useNavigate
} from 'react-router-dom';
import { RaceTag } from "./MinionTags";
import { iMinion } from "../../interfaces/minion.interface";

const MinionPreview: React.FC<{ minion: iMinion }> = ({ minion }) => {

  const text = useColorModeValue('dark.text', 'dark.text');
  const navigate = useNavigate();

  const handleNav = (route: string) => {
    navigate(`/${route}`);
  }

  if (minion === undefined) {
    return (
      <Heading>No Minion Found</Heading>
    )
  }

  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'start'}
      justifyContent={'center'}
      padding={5}
      onClick={() => handleNav(minion?.id?.toString())}
    >
      <Heading fontSize={'xl'} color={text} width={'89%'}>{minion.name}</Heading>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        height={'100%'}
        alignItems={'center'}
      >
        <Image src={minion?.image} width={['200px', '150px']} draggable={false} />    
      </Box>
      <Image src={minion?.icon} width={[10, 5]} position={'absolute'} top={5} right={5} draggable={false} />
      <HStack 
        width={'100%'} 
        display={'flex'} 
        justifyContent={'space-between'} 
        color={text}
        marginTop={2}
      >
        <Text fontSize={'xl'}>#{minion?.id}</Text>
        <RaceTag raceId={minion?.race?.id}>
          {minion?.race?.name}
        </RaceTag>
      </HStack>
    </Box>
  )
}

export default MinionPreview;
