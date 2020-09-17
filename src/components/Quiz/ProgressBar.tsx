import React from 'react';
import styled from 'styled-components';
import ProgressBarIcon from './ProgressBarIcon';

const Header = styled.header`
  width: 80%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface ProgressBarProps {
  currentQuestionNum: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionNum,
  totalQuestions,
}) => (
  <Header>
    <ProgressBarIcon
      currentQuestionNum={currentQuestionNum}
      totalQuestions={totalQuestions}>
      Diet
    </ProgressBarIcon>
    <ProgressBarIcon currentQuestionNum={0} totalQuestions={10}>
      Home
    </ProgressBarIcon>
    <ProgressBarIcon currentQuestionNum={0} totalQuestions={10}>
      Travel
    </ProgressBarIcon>
    <ProgressBarIcon currentQuestionNum={0} totalQuestions={10}>
      Other
    </ProgressBarIcon>
  </Header>
);

export default ProgressBar;
