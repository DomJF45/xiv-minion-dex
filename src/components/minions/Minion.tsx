import {
  Box, 
  Heading,
  Image,
  HStack
} from '@chakra-ui/react';
import Card from './Card';
import { 
  TagGroup,
  MinionTag,
  MinionTagTitle,
  BehaviorTags,
  RaceTag,
  PatchTag
} from './MinionTags';
import MinionBio from './MinionBio';
import { iMinion } from '../../interfaces/minion.interface';

const Minion: React.FC<{minion: iMinion}> = ({ minion }) => {

  return (
    <Card 
      width={'100%'}
      cursor={'default'}
      padding={5}
    >
      <Heading
        fontSize={'xl'}
        color={'dark.text'}
        width={'100%'}
        mb={3}
      >{minion?.name}</Heading>
      <Box
        width={'100%'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'start'}
      >
        <HStack width={'100%'} gap={3}> 
          <Image 
            src={minion?.image}
            width={['100px', '150px']}
            draggable={false}
            alignSelf={'start'}
          />
          <TagGroup>
            <MinionTag>
              <MinionTagTitle>
                Behavior
              </MinionTagTitle>
              <BehaviorTags type={minion?.behavior?.id}>{minion?.behavior?.name}</BehaviorTags>
            </MinionTag>
            <MinionTag>
              <MinionTagTitle>
                Race
              </MinionTagTitle>
              <RaceTag raceId={minion?.race.id}>{minion?.race?.name}</RaceTag>
            </MinionTag>
            <MinionTag>
              <MinionTagTitle>
                Patch
              </MinionTagTitle>
              <PatchTag>{minion?.patch}</PatchTag>
            </MinionTag>
          </TagGroup>
        </HStack>
        <MinionBio minion={minion} />
      </Box>
    </Card>
  )
}

export default Minion;
