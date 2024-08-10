import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ... your existing styles */

  * {
    box-sizing: border-box;  // Ensure padding and border are included in the total width and height
  }

  html, body {
    height: 100%;            // Make sure html and body take up the full viewport height
  }
`;

export default GlobalStyles;
