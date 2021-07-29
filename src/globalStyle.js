import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
  outline: none;
  padding: 0;
  font-family: 'Roboto',sans-serif;
 } 
 button {
   background-color: transparent;
   font-size: 15px;
   font-weight: 400;
   cursor:pointer;
   border: none;
   color: #FFF;
 }

`;

export default GlobalStyle;
