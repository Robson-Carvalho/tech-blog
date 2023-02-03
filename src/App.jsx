import { Home } from "./pages/home";

import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/global.style";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    min-height: 100vh;
    background-color: #F3F5F7;
  };

  *, body {
    box-sizing: border-box;
    font-family: "Inter", "Lexend Deca", sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
