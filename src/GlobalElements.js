import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color:#fff;
    }
    :root {
        --theme-color: rgb(255, 174, 0);
    }
`;