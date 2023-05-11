import {
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';
import StatChart from './StatChart';
import { MinionTag, MinionTagTitle, TagGroup } from './MinionTags';
import { iMinion, iVerminion } from '../../interfaces/minion.interface';

const MinionStats: React.FC<{minion: iMinion, verminion: iVerminion}> = ({ minion, verminion }) => {

  return (
    <>
      <Heading fontSize={'xl'} color={'dark.text'} width={'89%'}>Verminion</Heading>
      <TagGroup>
        <MinionTag >TagGroup
          <MinionTagTitle>HP</MinionTagTitle>
          <Text>{verminion?.hp}</Text>
        </MinionTag>
        <MinionTag >
          <MinionTagTitle>Speed</MinionTagTitle>
          <HStack pt={0}>
            {Array.from(Array(verminion?.speed), (index: number) => (
              <TiStarFullOutline style={{margin: 4}} key={index} />
            ))}
          </HStack>
        </MinionTag>
        <MinionTag >
          <MinionTagTitle>
            Attack
          </MinionTagTitle>
          <Text>{verminion?.attack}</Text>
        </MinionTag>
        <MinionTag >
          <MinionTagTitle>
            Defense
          </MinionTagTitle>
          <Text>
            {verminion?.defense}
          </Text>
        </MinionTag>
        <MinionTag >
          <MinionTagTitle>
            Cost
          </MinionTagTitle>
          <Text>
            {verminion?.cost}
          </Text>
        </MinionTag>
      </TagGroup>
      <StatChart minion={minion} verminion={verminion} />
    </>
  )
}

export default MinionStats