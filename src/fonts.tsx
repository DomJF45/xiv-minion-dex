import { Global } from '@emotion/react';

const Fonts = () => (
  <Global 
    styles={`
      
      /* latin */
      @font-face {
        font-family: 'JupiterPro-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../public/JupiterPro-Bold.woff2') format(woff2), url('../public/JupiterPro-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    
      /* latin */
      @font-face {
        font-family: 'TrumpGothicPro';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../public/TrumpGothicPro.woff2') format(woff2), url('../public/TrumpGothicPro.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

    `}
  />
)

export default Fonts;
