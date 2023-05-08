import { 
  Box,
  useColorModeValue
} from "@chakra-ui/react"

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  
  const { children } = props;

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
      overscrollY={'none'}
      overscrollX={'none'}
    >
      {children}       
    </Box> 
  )
}

export default Layout;
