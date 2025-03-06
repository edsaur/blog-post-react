import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        *,
      *::before,
      *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      
        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
      }
    }

    body {
    margin: 0;
    font-family: 'Poppins', Arial, sans-serif; /* Use 'Inter' with fallbacks */
    background-color:rgb(72, 70, 83); /* Optional: light modern background color */
    color: white; /* Optional: modern default text color */
  }
`;

export default GlobalStyles;
