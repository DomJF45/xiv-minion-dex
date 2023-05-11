import {
  HStack,
  Heading,
  Box,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import ThemeToggle from "./ThemeToggle";

const Nav = () => {

  return (
    <Box
      backgroundColor={useColorModeValue('light.bg', 'dark.bg')}
      width={'100%'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingTop={5}
    >
      <HStack
        width={['90%', '1150px']}
        display={'flex'}
        justifyContent={'space-between'}
        mb={5}
      >
        <VStack justifyContent={'start'}>
          <Heading
            color={useColorModeValue('light.text', 'dark.text')}
            fontSize={['xl', '3xl']}
          >
            Minion-Dex
          </Heading>
          <Text fontSize={'sm'} margin={0} padding={0} alignSelf={'start'} color={useColorModeValue('light.text', 'dark.text')}>
            Final Fantasy XIV <span style={{fontSize: '10px'}}>©</span>
          </Text>
        </VStack>
        <ThemeToggle />
      </HStack>
      <Box 
        height={'1px'}
        width={['90%', '1150px']}
        backgroundColor={useColorModeValue('light.border', 'dark.border')}
      />
    </Box>
  )
}

export default Nav;
