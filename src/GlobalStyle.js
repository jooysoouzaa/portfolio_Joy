import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Estilos do antigo App.css */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Configurações da Scrollbar */
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #060606;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: linear-gradient(180deg, #9b30f9,#84e);
        border: 1px solid #060606;
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 6px;
        background: linear-gradient(0deg, #9b30f9,#84e);
        border: 1px solid #060606;
    }

    *::selection {
        color: #fef5f5;
        background: #7312FA;
        -webkit-text-fill-color: #fef5f5;
    }

    strong {
        background: linear-gradient(#9b30f9,#84e);
        -webkit-background-clip: text;
        color: transparent;
    }

    /* Estilos da página */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Titillium Web", sans-serif;
        list-style: none;
        text-decoration: none;
        -webkit-tap-highlight-color: #2222226e;
        -webkit-touch-callout: none;
    }

    html {
        scroll-behavior: smooth;
    }

    html, body {
        overflow-x: hidden;
    }

    body {
        background-color: #010101;
        color: #fef5f5;
    }
    `;

export default GlobalStyle;
