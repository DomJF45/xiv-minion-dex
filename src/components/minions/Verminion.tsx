import React from 'react'
import { Card } from './MinionUtils';
import MinionStats from './MinionStats';
import { iMinion, iVerminion } from '../../interfaces/minion.interface';

const Verminion: React.FC<{minion: iMinion, verminion: iVerminion}> = ({ minion, verminion }) => {

  return (
    <Card 
      width={['100%', '50%']}
      cursor={'default'}
      alignSelf={'start'}
      padding={5}
    >
      <MinionStats minion={minion} verminion={verminion} />
    </Card>
  )
}

export default Verminion