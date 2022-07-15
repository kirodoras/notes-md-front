import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        background: #FDFDFD;
        font-family: 'Roboto', sans-serif;
    }

    .root {
        width: 100%;
        max-width: 100%;
        height: 100%;
    }

    input, button {
        border: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalCss;