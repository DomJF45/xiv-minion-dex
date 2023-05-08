import {
  Text
} from '@chakra-ui/react';
import { tagMap } from '../utils/tagColors';

interface Props {
  race: string;
  raceId: number;
}

const RaceTag = (props: Props) => {

  const { race, raceId } = props;

  return (
    <Text
      width={'70px'}
      backgroundColor={tagMap[raceId]}
      height={'35px'}
      justifyContent={'center'}
      display={'flex'}
      borderRadius={'8px'}
      fontSize={'xl'}
    >
      {race}
    </Text>
  )
}

export default RaceTag;
