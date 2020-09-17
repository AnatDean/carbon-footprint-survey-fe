import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
interface QuestionPageProps {
  currentQuestionNum: number;
  totalQuestions: number;
  question: string;
  answers: string[];
}

//// background-color: ${(props) => props.theme.offWhite};
const Container = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  justify-items: center;
  text-align: start;
`;

const QuestionPage: React.FC<QuestionPageProps> = ({
  currentQuestionNum,
  totalQuestions,
  question,
  answers,
}) => (
  <Container>
    <h1>{question}</h1>
    <p>
      Question {currentQuestionNum} of {totalQuestions}
    </p>
    {answers.map((answer) => (
      <Button key={answer} buttonType='quiz' onClick={() => {}}>
        {answer}
      </Button>
    ))}
    <Button onClick={() => {}} buttonType='primary'>
      Next Question
    </Button>
  </Container>
);
export default QuestionPage;
