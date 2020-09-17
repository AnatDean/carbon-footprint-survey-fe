import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ProgressBar from '../Quiz/ProgressBar';
import QuestionDetails from '../Quiz/QuestionDetails';
interface QuestionPageProps {
  currentQuestionNum: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  progress: () => void;
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

const QuizContainer = styled.section``;

const AnswerList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Footer = styled.footer`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuestionPage: React.FC<QuestionPageProps> = ({
  currentQuestionNum,
  totalQuestions,
  question,
  answers,
  progress,
}) => (
  <Container>
    <ProgressBar
      currentQuestionNum={currentQuestionNum}
      totalQuestions={totalQuestions}
    />
    <QuizContainer>
      <QuestionDetails
        currentQuestionNum={currentQuestionNum}
        totalQuestions={totalQuestions}
        question={question}
      />
      <AnswerList>
        {answers.map((answer) => (
          <Button key={answer} buttonType='quiz' onClick={() => {}}>
            {answer}
          </Button>
        ))}
      </AnswerList>
    </QuizContainer>
    <Footer>
      <Button onClick={progress} buttonType='primary'>
        Next Question
      </Button>
    </Footer>
  </Container>
);
export default QuestionPage;
