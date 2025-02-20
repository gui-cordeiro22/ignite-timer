import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "../config/theme/defaultTheme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${defaultTheme.green[500]};
    }

    body {
        background: ${defaultTheme.gray[900]};
        color: ${defaultTheme.gray[300]};
    }

    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
