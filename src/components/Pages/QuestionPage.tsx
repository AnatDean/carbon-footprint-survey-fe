import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ProgressBar from '../Quiz/ProgressBar';
import ProgressBarIcon from '../Quiz/ProgressBarIcon';
import QuestionDetails from '../Quiz/QuestionDetails';
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

const QuizContainer = styled.section`
  height: 70vh;
`;

const AnswerList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const QuestionPage: React.FC<QuestionPageProps> = ({
  currentQuestionNum,
  totalQuestions,
  question,
  answers,
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
    <Button onClick={() => {}} buttonType='primary'>
      Next Question
    </Button>
  </Container>
);
export default QuestionPage;
