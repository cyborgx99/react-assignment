import Spinner from 'components/spinner';
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
  disabled,
  isLoading = false,
}: ButtonPropsInterface) => {
  const handleClick = () => {
    if (isLoading) return;
    onClick();
  };

  return (
    <StyledButton
      $additionalStyles={additionalStyles}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      $color={color}
      $backgroundColor={backgroundColor}
    >
      {isLoading ? <Spinner /> : text}
    </StyledButton>
  );
};

export default Button;
