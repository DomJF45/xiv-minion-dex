import {
  SimpleGrid,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';
import MinionPreview from './MinionPreview';
import { iMinion } from "../../interfaces/minion.interface";

const Minions: React.FC<{
  minions: iMinion[];
}> = ({
  minions,
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
    <AnimatePresence>
      <motion.div
        variants={container}
        initial={"hidden"} 
        animate={"visible"}
      >
        <SimpleGrid columns={[1,1,4]} height={'100%'} spacingX={10} spacingY={8}>
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
