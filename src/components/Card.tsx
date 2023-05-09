import {
  Box,
  forwardRef,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react';

const Card = forwardRef<BoxProps, "div">((props, ref) => (
    <Box
      border={'4px solid'}
      borderColor={useColorModeValue('light.border', 'dark.border')}
      borderRadius={'10px'}
      backgroundColor={'light.boxbg'}
      position={'relative'}
      ref={ref}
      {...props}
    />
  )
)

export default Card;
