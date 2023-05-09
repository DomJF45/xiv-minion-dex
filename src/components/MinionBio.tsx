import { Heading, VStack, Text, Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  type?: number;
}

export const MinionInfo = (props: Props) => {
  const { children } = props;
  return (
    <VStack 
      width={'100%'}
      alignItems={'start'}
    >
      {children}
    </VStack>
  )
}

export const MinionHeader = (props: Props) => {
  const { children } = props;
  const color = useColorModeValue('light.text', 'dark.text');
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

export const MinionDesc = (props: Props) => {
  const text = useColorModeValue('#ffffff87', '#ffffff20');
  const color = useColorModeValue('light.text', 'dark.text');
  const {children} = props;
  return (
    <Text
      fontSize={'xl'} 
      backgroundColor={text} 
      width={'100%'} 
      padding={5}
      borderRadius={'8px'}
      color={color}
    >
      {children}
    </Text>
  )
}

export const BehaviorTags = (props: Props) => {

  const { children, type } = props;

  const behaviorMap: {[key: number]: string} = {
    1: 'rgb(254, 206, 245)',
    2: 'rgb(139, 156, 99)',
    3: 'rgb(228, 158, 52)'
  }

  return (
    <Text 
      width={'90px'}
      backgroundColor={type ? behaviorMap[type] : '#303030'}
      height={'35px'}
      justifyContent={'center'}
      display={'flex'}
      borderRadius={'8px'}
      fontSize={'2xl'}
      color={'#ffffff99'}
    >
      {children}
    </Text>
  )
}
