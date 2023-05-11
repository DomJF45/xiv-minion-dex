import {
  Box,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Footer = () => {

  const backgroundColor = useColorModeValue('light.bg', 'dark.bg');
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      width={'100%'}
      minH={'200px'}
      backgroundColor={backgroundColor}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      color={textColor}
      padding={10}
    >
      <Text fontSize={['lg','2xl']} textAlign={'center'}>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</Text>
      <Text fontSize={['md', 'lg']}>{'Made with <3 by '}<Link to='https://webbydom.works' target="_blank">Dom</Link></Text>
    </Box>
  )
}

export default Footer;
