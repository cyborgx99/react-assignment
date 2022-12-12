import React from 'react';
import { StyledButton } from './styles';
import { ButtonPropsInterface } from './types';

const Button = ({
  text,
  backgroundColor,
  color,
  onClick,
  additionalStyles,
  type = 'button',
}: ButtonPropsInterface) => {
  return (
    <StyledButton
      $additionalStyles={additionalStyles}
      type={type}
      onClick={onClick}
      $color={color}
      $backgroundColor={backgroundColor}
    >
      {text ?? ''}
    </StyledButton>
  );
};

export default Button;
