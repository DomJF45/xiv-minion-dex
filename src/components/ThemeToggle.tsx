import { 
  IconButton,
  useColorMode,
  useColorModeValue 
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHeraldicSun } from 'react-icons/gi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const ThemeToggle = () => {

  const { toggleColorMode } = useColorMode();

  const iconSize = 30;

    const iconColor = useColorModeValue('dark.text', 'dark.text');
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{display: 'inline-block'}}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          background={'linear-gradient(0deg, #AB3738 5%, #AB3738, #AB3738, #AB3738, #E1A3A4)'}
          color={'#E2B160'}
          icon={useColorModeValue(<BsFillMoonStarsFill size={iconSize - 10} />, <GiHeraldicSun size={iconSize} />)}
          onClick={toggleColorMode}
          _hover={{
            backgroundColor: "#9B3738" 
          }}
          boxShadow={'1px 1px 2px #303030'}
          borderRadius={'8px'}
        ></IconButton> 
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggle;
