import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: `'JupiterPro-Bold', sans-serif`,
  body: `'TrumpGothicPro', sans-serif`
}

const colors = {
  'dark': {
    bg: "#303030",
    border: '#9A8256',
    text: '#D5CBB2',
    header: '#BDBDBD',
    boxbg: '#AB3738'
  },
  'light': {
    bg: '#f6dcb7',
    border: '#7B5D3F',
    text: '#854722',
    header: '#70584E',
    boxbg: '#AB3738'
  }
}

const theme = extendTheme({ config, colors, fonts });

export default theme;
