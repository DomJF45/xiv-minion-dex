import { 
  Heading, 
  VStack, 
  Box,
  BoxProps,
  forwardRef,
  useColorModeValue 
} from "@chakra-ui/react";

export const Card = forwardRef<BoxProps, "div">((props, ref) => (
  <Box
    borderRadius={'10px'}
    backgroundColor={'light.boxbg'}
    position={'relative'}
    ref={ref}
    color={'dark.text'}
    boxShadow={useColorModeValue('2px 2px 10px #30303050', '')}
    {...props}
  />
))

export const MinionInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <VStack 
      width={'100%'}
      alignItems={'start'}
    >
      {children}
    </VStack>
  )
}

export const MinionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const color = 'dark.text';
  return (
    <Box>
      <Heading fontSize={'xl'} color={color}>{children}</Heading>
      <Box
        width={'100%'}
        height={'1px'}
        backgroundColor={color}
      />
    </Box>
  )
}

export const MinionDesc: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const text = '#ffffff20';
  return (
    <Box
      fontSize={'xl'} 
      backgroundColor={text} 
      width={'100%'} 
      padding={5}
      borderRadius={'8px'}
    >
      {children}
    </Box>
  )
}

