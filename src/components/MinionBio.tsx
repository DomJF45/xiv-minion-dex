import { 
  Heading, 
  VStack, 
  Box,
  BoxProps,
  forwardRef, 
} from "@chakra-ui/react";
import { behaviorMap } from "../utils/tagColors";

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

export const MinionDesc = (props: Props) => {
  const text = '#ffffff20';
  const {children} = props;
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

export const Tag = forwardRef<BoxProps, "div">((props, ref) => (
  <Box 
    width={['55px', '80px']}
    height={['30px', '35px']}
    fontSize={['lg', '2xl']}
    display={'flex'}
    justifyContent={'center'}
    borderRadius={'5px'}
    color={'#ffffff99'}
    ref={ref}
    {...props}
  />
))

export const BehaviorTags = (props: Props) => {

  const { children, type } = props; 

  return (
    <Tag
      backgroundColor={type ? behaviorMap[type] : '#303030'}
    >
      {children}
    </Tag>
  )
}

export const PatchTag = (props: Props) => {
  const { children } = props;
  return (
    <Tag
      backgroundColor={'#ffffff20'}
    >
      {children}
    </Tag>
  )
}
