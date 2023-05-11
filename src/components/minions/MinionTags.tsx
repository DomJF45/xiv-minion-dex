import {
  Box,
  HStack,
  VStack,
  Text,
  BoxProps,
  forwardRef,
} from '@chakra-ui/react';
import { tagMap, behaviorMap } from '../../utils/tagColors';

export const TagGroup: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <HStack alignSelf={'start'}>
      {children}
    </HStack>
  )
}

export const MinionTag: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <VStack>
      {children}
    </VStack>
  )
}

export const MinionTagTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Text
      fontSize={['md', 'xl']}
      color={'dark.text'}
    >
      {children}
    </Text>
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

export const RaceTag: React.FC<{children: React.ReactNode, raceId: number}> = ({children, raceId}) => {

  return (
    <Tag
      backgroundColor={tagMap[raceId]}
    >
      {children}
    </Tag>
  )
}

export const PatchTag: React.FC<{children: React.ReactNode}> = ({ children }) => {
  
  return (
    <Tag
      backgroundColor={'#ffffff20'}
    >
      {children}
    </Tag>
  )
}

export const BehaviorTags:React.FC<{children: React.ReactNode, type: number}> = ({children, type}) => {

  return (
    <Tag
      backgroundColor={type ? behaviorMap[type] : '#303030'}
    >
      {children}
    </Tag>
  )
}