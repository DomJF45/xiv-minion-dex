import { tagMap } from '../utils/tagColors';
import { Tag } from './MinionBio';

interface Props {
  race: string;
  raceId: number;
}

const RaceTag = (props: Props) => {

  const { race, raceId } = props;

  return (
    <Tag
      backgroundColor={tagMap[raceId]}
    >
      {race}
    </Tag>
  )
}

export default RaceTag;
