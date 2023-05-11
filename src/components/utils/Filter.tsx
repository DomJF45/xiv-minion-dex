import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {IoFilterOutline} from 'react-icons/io5';
import { tagMap } from '../../utils/tagColors';
import icon from '../../assets/minion-race-icons.png';

interface iMenuItem {
  id: number;
  name: string;
}

const menuItems: iMenuItem[] = [
  {
    id: 1,
    name: 'Critter'
  },
  {
    id: 2,
    name: 'Monster'
  },
  {
    id: 3,
    name: 'Poppet'
  },
  {
    id: 4,
    name: 'Gadget'
  }
]

const Filter: React.FC<{
  filter: number,
  setFilter: (num: number) => void;
}> = ({
  filter,
  setFilter
}) => {

  const bgcolor = useColorModeValue('light.bg', 'dark.bg');
  
  const iconPosMap: {[key: number]: number} = {
    1: 0,
    2: 24,
    3: 48,
    4: 72
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        backgroundColor={bgcolor}
        border={'1px solid'}
        borderColor={useColorModeValue('light.border', 'dark.border')}
        color={useColorModeValue('light.text', 'dark.text')}
        gap={3}
        rightIcon={<IoFilterOutline />}
        _hover={{
          backgroundColor: (useColorModeValue('#ffffff50','#ffffff10'))
        }}
      >
        Filter
      </MenuButton>
      <MenuList
        fontSize={['xl', '2xl']}
        backgroundColor={useColorModeValue('light.boxbg', 'dark.bg')}
        boxShadow={'0px 2px 10px #303030'}
        paddingInline={3}
        border={'2px solid'}
        borderColor={useColorModeValue('light.border', 'dark.border')}
      >
        {
          menuItems.map((item) => (
            <MenuItem
              key={item.id}
              backgroundColor={tagMap[item.id]}
              width={'100%'}
              marginBlock={3}
              borderRadius={'5px'}
              color={'#ffffff99'}
              onClick={() => setFilter(item.id)}
            >
              <Text
                display={'flex'}
                justifyContent={'space-between'}
                width={'100%'}
              >
                {item.name}
                <Box
                  width={'24px'}
                  height={'24px'}
                  backgroundImage={icon}
                  backgroundPosition={`-${iconPosMap[item.id]}px 0`}
                  alignSelf={'center'}
                />
              </Text>
            </MenuItem>
          ))
        }
      </MenuList>
    </Menu>

  )
}

export default Filter;

/*
<>
      <IconButton aria-label='filter-btn' ref={btnRef} icon={<IoFilterOutline />} onClick={onOpen}>
        Filter
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={useColorModeValue('light.bg', 'dark.bg')}
        >
          <DrawerCloseButton />
          <DrawerHeader>Filter Minions</DrawerHeader>
          <DrawerBody>
            <Text>Testing</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
*/
