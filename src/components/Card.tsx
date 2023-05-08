import {
  Box, useColorModeValue
} from '@chakra-ui/react';
import theme from '../theme';

interface Props {
  children: React.ReactNode;
}

const Card = (props: Props) => {
  
  const { children } = props;

  return (
    <Box
      minHeight={[350,400,250]}
      maxWidth={[300,300, 250]}
      border={'4px solid'}
      borderColor={useColorModeValue('light.border', 'dark.border')}
      borderRadius={'10px'}
      backgroundColor={'light.boxbg'}
      margin={0}
      position={'relative'}
    >
      {children}
    </Box>
  )
}

export default Card;
