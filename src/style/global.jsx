import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    html, body, div#root {
        min-height: 100%;
    }

    body {
        background: #7159c1;
    }
`;