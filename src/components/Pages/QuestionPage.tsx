import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ProgressBar from '../Quiz/ProgressBar';
import QuestionDetails from '../Quiz/QuestionDetails';
interface QuestionPageProps {
  currentQuestionNum: number;
  question_id: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  progress: () => void;
  selectChoice: (id: number, answer: string) => void;
  selectedChoice: string;
}

//// background-color: ${(props) => props.theme.offWhite};
const Container = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  justify-items: center;
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
  question_id,
  totalQuestions,
  question,
  answers,
  progress,
  selectChoice,
  selectedChoice,
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
        {/* display multiple choice answers */}
        {answers.map((answer) => (
          <Button
            selected={selectedChoice === answer}
            key={answer}
            buttonType='quiz'
            onClick={() => selectChoice(question_id, answer)}>
            {answer}
          </Button>
        ))}
      </AnswerList>
    </QuizContainer>
    <Footer>
      <Button onClick={progress} buttonType='primary'>
        Next question
      </Button>
    </Footer>
  </Container>
);
export default QuestionPage;
