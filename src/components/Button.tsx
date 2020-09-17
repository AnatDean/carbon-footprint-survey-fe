import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

interface ButtonProps {
  children: HTMLCollection | string;
  buttonType: string;
  onClick: () => void;
}

export type ButtonComponentProps = {
  children: HTMLCollection | string;
  buttonType: string;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const progressButtonStyle = `
  text-align: center;
  width: 80%;
  height: ${rem('50px')};
`;

const StyledButton: React.FC<ButtonComponentProps> = styled.button<
  ButtonComponentProps
>`
  background-color: ${(props) =>
    props.buttonType === 'primary' ? props.theme.green : props.theme.white};
  color: ${(props) =>
    props.buttonType === 'primary' ? props.theme.white : props.theme.black};

  ${(props) => props.buttonType === 'primary' && progressButtonStyle}
`;

const Button: React.FC<ButtonProps> = ({ children, buttonType, onClick }) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
