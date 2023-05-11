import {
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';
import MinionPreview from './MinionPreview';
import SearchBar from "../utils/SearchBar";
import { iMinion } from "../../interfaces/minion.interface";
import Filter from "../utils/Filter";

const Minions: React.FC<{
  minions: iMinion[];
  search: string;
  filter: number | null;
  setSearch: (str: string) => void;
  setFilter: (num: number) => void;
}> = ({
  minions,
  search,
  filter,
  setSearch,
  setFilter
}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <AnimatePresence mode={'sync'} >
      <HStack 
        width='100%'
        justifyContent={'space-between'}
      >
        <SearchBar search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </HStack>
      <motion.div
        variants={container}
        initial={"hidden"} 
        animate={"visible"}
      >
        <SimpleGrid columns={[1,1,4]} height={'100%'} spacing={10}>
          {minions && 
            minions.map((minion: iMinion) => (
              <Card 
                key={minion.id} 
                minHeight={[350,400,250]}
                maxWidth={[300,300, 250]}
                cursor={'pointer'}
                as={motion.div}
                variants={item}
                transition={'ease-in-out'}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: .2 }
                }}
              >
                <MinionPreview minion={minion} />
              </Card>
            ))
          }
        </SimpleGrid>
      </motion.div>
    </AnimatePresence>
  )
}

export default Minions;
