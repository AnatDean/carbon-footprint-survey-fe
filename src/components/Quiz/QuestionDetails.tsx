import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  align-self: center;
  width: 100%;
  padding-left: 10%;
  padding-top: 5%;
`;

const Detail = styled.p`
  font-size: ${rem('10px')};
  color: ${(props) => props.theme.darkGrey};
`;

const QuestionTitle = styled.h1`
  font-size: ${rem('20px')};
  font-weight: bold;
  padding-top: ${rem('5px')};
  padding-bottom: ${rem('10px')};
  width: 70%;
`;

interface QuestionDetailsProps {
  question: string;
  currentQuestionNum: number;
  totalQuestions: number;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({
  question,
  currentQuestionNum,
  totalQuestions,
}) => (
  <Container>
    <Detail>
      Question {currentQuestionNum + 1} of {totalQuestions}
    </Detail>
    <QuestionTitle>{question}</QuestionTitle>
  </Container>
);

export default QuestionDetails;
