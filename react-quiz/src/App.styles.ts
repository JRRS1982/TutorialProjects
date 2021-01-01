import styled, { createGlobalStyle } from "styled-components";
import BackGroundImage from "./images/BackgroundImage.jpeg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  
  body {
    background-image: url(${BackGroundImage});
    background-size: cover;
    margin: 0;
    padding 0 20px;
    display: flex;
    justify-content: center;
  }
  
  *  {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  
  // style just p tags on this wrapper
  > p {
    colour: #fff;
  }
  
  .score {
    colour: white;
    font-size: 2rem;
    margin: 0;
  }
  
  h1 {
    font-family: Fascinate Inline, Ariel Narrow Bold;
    background-image: linear-gradient(180deg, #fff, #87f1ff):
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-colour: transparent;
    -moz-background-clip: text;
    -moz-text-fill-colour: transparent;
    filter: drop-shadow(2px, 2px, #0085a3);
    font-size(70px);
    text-align: center;
    margin: 20px;
  }
  
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px; 
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
  .start {
    max-width: 200px;
  }
`;
