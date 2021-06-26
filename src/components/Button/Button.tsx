import { FC } from 'react';
import styled from 'styled-components';

export enum ButtonType {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
}

interface StyledButtonProps {
  buttonType: ButtonType;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ buttonType, theme }) =>
    buttonType === ButtonType.DEFAULT ? 'rgba(0,0,0,0)' : theme.BUTTON_PRIMARY};
  color: ${({ buttonType, theme }) =>
    buttonType === ButtonType.DEFAULT ? theme.BUTTON_DEFAULT_FONT : theme.PRIMARY};
  border: none;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 900;
  transition: opacity 0.5s;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ type, text, onClick }) => (
  <StyledButton onClick={onClick} buttonType={type!}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  type: ButtonType.DEFAULT,
};

export default Button;
