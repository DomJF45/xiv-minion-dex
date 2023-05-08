import { useState } from 'react';
import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
  minion: any;
}

const Minion = (props: Props) => {

  const { minion } = props;
  const text = useColorModeValue('dark.text', 'dark.text');

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
    >
      <Heading fontSize={'xl'} color={text} width={'89%'}>{minion.name}</Heading>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        height={'100%'}
        alignItems={'center'}
      >
        <Image src={minion.image} width={['200px', '150px']} draggable={false} />    
      </Box>
      <Image src={minion.icon} width={[10, 5]} position={'absolute'} top={0.5} right={0.5} draggable={false} />
      <Box width={'100%'} display={'flex'} justifyContent={'start'} color={text}>
        <h1>#{minion.id}</h1>
      </Box>
    </Box>
  )
}

export default Minion;
