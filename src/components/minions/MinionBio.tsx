import {
  VStack,
  Text
} from '@chakra-ui/react';
import {
  MinionInfo,
  MinionHeader,
  MinionDesc
} from './MinionUtils';
import { iMinion } from '../../interfaces/minion.interface';

const MinionBio: React.FC<{ minion: iMinion}> = ({ minion }) => {

  return (
    <VStack
      alignSelf={'start'}
      gap={5}
    >
      <MinionInfo>
        <MinionHeader>Description</MinionHeader>
        <MinionDesc>{minion?.description}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Source</MinionHeader>
        <MinionDesc>{minion?.sources?.map((source, index: number) => <Text key={index}>{source?.text}</Text>)}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Journal</MinionHeader>
        <MinionDesc>{minion?.enhanced_description}</MinionDesc>
      </MinionInfo>

      <MinionInfo>
        <MinionHeader>Tooltip</MinionHeader>
        <MinionDesc>{minion?.tooltip}</MinionDesc>
      </MinionInfo>
    </VStack>
  )
}

export default MinionBio