import { FC } from 'react';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ text, type }) => {
  return <button type={type}>{text}</button>;
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
