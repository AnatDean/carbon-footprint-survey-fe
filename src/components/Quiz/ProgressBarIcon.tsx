import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface ProgressBarIconProps {
  children: HTMLCollection | string;
  currentQuestionNum: number;
  totalQuestions: number;
}

const BarBackground = styled.div`
  background-color: ${(props) => props.theme.lightPink};
  height: 2vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
`;

interface BarFillerProps {
  fill: number;
}

const BarFiller: React.FC<BarFillerProps> = styled.div<BarFillerProps>`
  background-color: ${(props) => props.theme.pink};
  height: 2vh;
  width: ${(props) => props.fill}%;
`;

const Detail = styled.p`
  font-size: ${rem('10px')};
  color: ${(props) => props.theme.darkGrey};
`;

const Container = styled.div`
  text-align: center;
`;

const ProgressBarIcon: React.FC<ProgressBarIconProps> = ({
  children,
  currentQuestionNum,
  totalQuestions,
}) => {
  const percentage: number = Math.round(
    (currentQuestionNum / totalQuestions) * 100
  );
  return (
    <Container>
      <BarBackground>
        <BarFiller fill={percentage} />
      </BarBackground>
      <Detail>{children}</Detail>
    </Container>
  );
};

export default ProgressBarIcon;
