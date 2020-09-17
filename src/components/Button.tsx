import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface ButtonProps {
  children: HTMLCollection | string;
  buttonType: string;
  onClick: () => void;
  selected?: boolean;
}


export type ButtonComponentProps = {
  className: string;
  children: HTMLCollection | string;
  buttonType: string;
  selected: boolean;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const progressButtonStyle = (theme: any) => `
  text-align: center;
  width: 80%;
  height: ${rem('50px')};
  background-color: ${theme.green};
  color: ${theme.white};
`;

const quizButtonStyle = (theme: any, selected: boolean): string => {
  return `
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  width: 40vw;
  height: ${rem('89px')};
  background-color: ${selected ? theme.pink : theme.white};
  margin: 5px;
  color: ${selected ? theme.white : theme.black};
`;
};

const StyledButton: React.FC<ButtonComponentProps> = styled.button<
  ButtonComponentProps
>`
  ${({ buttonType, theme }) =>
    buttonType === 'primary' && progressButtonStyle(theme)}
    
  ${({ buttonType, theme, selected }) =>
    buttonType === 'quiz' && quizButtonStyle(theme, selected)}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  onClick,
  selected,
}) => {
  return (
    <StyledButton
      className={selected ? 'selected' : ''}
      buttonType={buttonType}
      selected={selected || false}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
