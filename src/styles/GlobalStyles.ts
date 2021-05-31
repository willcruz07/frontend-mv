import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html, body, #root {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        background-color: #f4f6f8;
    }
   

     *, button, input {
        border: 0;
        outline: 0;        
        font-family: "Nunito", sans-serif;
    }

    button, input {
        cursor: pointer;
    } 
`;
