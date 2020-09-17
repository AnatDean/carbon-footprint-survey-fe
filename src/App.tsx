import React from 'react';
import './App.css';
import { theme } from './styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import QuestionPage from './components/Pages/QuestionPage';
import { GlobalStyle } from './styles/globalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
`;

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Container>
          <QuestionPage
            currentQuestionNum={2}
            totalQuestions={4}
            question={'Question Text'}
            answers={['A', 'B', 'C', 'D']}
          />
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
