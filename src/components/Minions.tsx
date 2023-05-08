import { useState, useEffect } from 'react';
import { 
  Box,
  HStack,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Card from './Card';
import Minion from './Minion';

interface Props {
  minions: any;
}

const Minions = (props: Props) => {

  const { minions } = props;
  
  return (
    <SimpleGrid columns={[1,1,4]} height={'100%'} spacing={10}>
      {minions && 
        minions.map((minion: any) => (
          <>
            <Card 
              key={minion.id} 
              minHeight={[350,400,250]}
              maxWidth={[300,300, 250]}
              cursor={'pointer'}
            >
              <Minion minion={minion} />
            </Card>
          </>
        ))
      }
    </SimpleGrid>
  )
}

export default Minions;
