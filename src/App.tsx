import React from 'react';
import './App.css';
import { theme } from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import QuestionPage from './components/Pages/QuestionPage';
import { GlobalStyle } from './styles/globalStyle';
import Quiz from './components/Quiz/Quiz';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Quiz />
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
