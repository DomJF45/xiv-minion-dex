import { useEffect, useState } from 'react'
import { Box, Heading, Text, useColorMode, useColorModeValue, Button, SimpleGrid, Divider } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
 
  return (
    <Box
      minH={'100vh'}
      padding={10}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      backgroundColor={useColorModeValue('light.bg', 'dark.bg')}
      border={'4px solid'}
      borderColor={useColorModeValue('light.border', 'dark.border')}
      overflowX={'hidden'}
      transition={'ease-in-out'}
      transitionDuration={'200ms'}
      gap={10}
    >
      <Home />
    </Box>
  )
}

export default App
