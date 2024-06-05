import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // Isso garante que o padding e border não aumentem o tamanho do box
  }

  *, *:before, *:after {
    box-sizing: inherit; // Isso faz todos os elementos herdar o box-sizing do body
  }
`;
