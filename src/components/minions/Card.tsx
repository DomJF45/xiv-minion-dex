import {
  Box,
  forwardRef,
  useColorModeValue,
  BoxProps,
} from '@chakra-ui/react';

const Card = forwardRef<BoxProps, "div">((props, ref) => (
    <Box
      borderRadius={'10px'}
      backgroundColor={'light.boxbg'}
      position={'relative'}
      ref={ref}
      color={'dark.text'}
      boxShadow={useColorModeValue('2px 2px 10px #30303050', '')}
      transition={'.5 ease-in-out'}
      {...props}
    />
  )
)

export default Card;
