import { useState } from 'react';
import { 
  Box, 
  Heading, 
  Image,
  HStack,
  Text, 
  useColorModeValue 
} from "@chakra-ui/react"
import RaceTag from './RaceTag';
import {
  useNavigate
} from 'react-router-dom';

interface Props {
  minion: any;
}

const Minion = (props: Props) => {

  const { minion } = props;
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
      <Image src={minion?.icon} width={[10, 5]} position={'absolute'} top={0.5} right={0.5} draggable={false} />
      <HStack 
        width={'100%'} 
        display={'flex'} 
        justifyContent={'space-between'} 
        color={text}
        marginTop={2}
      >
        <Text fontSize={'xl'}>#{minion?.id}</Text>
        <RaceTag race={minion?.race?.name} raceId={minion?.race?.id} />
      </HStack>
    </Box>
  )
}

export default Minion;
