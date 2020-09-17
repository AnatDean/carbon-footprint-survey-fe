import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface ButtonProps {
  children: HTMLCollection | string;
  buttonType: string;
  onClick: () => void;
}

interface StyleProps {}

export type ButtonComponentProps = {
  children: HTMLCollection | string;
  buttonType: string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const progressButtonStyle = (theme: any) => `
  text-align: center;
  width: 80%;
  height: ${rem('50px')};
  background-color: ${theme.green};
  color: ${theme.white};
`;

const quizButtonStyle = (theme: any): string => {
  return `
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  width: 40vw;
  height: ${rem('89px')};
  background-color: ${theme.white};
  margin: 5px;
  color: ${theme.black};
  &:focus {
    color: ${theme.white};
    background-color: ${theme.pink};
  }
`;
};

const StyledButton: React.FC<ButtonComponentProps> = styled.button<
  ButtonComponentProps
>`
  ${(props) =>
    props.buttonType === 'primary' && progressButtonStyle(props.theme)}
  ${(props) => props.buttonType === 'quiz' && quizButtonStyle(props.theme)}
`;

const Button: React.FC<ButtonProps> = ({ children, buttonType, onClick }) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
