import React from 'react';
import './App.css';
import { theme } from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import Quiz from './components/Quiz/Quiz';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
  width: 100vw;
`;

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Quiz />
      </ThemeProvider>
      <GlobalStyle />
    </Container>
  );
}

export default App;
