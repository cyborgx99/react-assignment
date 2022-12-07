import React from 'react';
import { StyledIcon } from './styles';
import { IconProps } from './types';

const Icon = ({
  name,
  fontSize = 1.5,
  color = 'primary.100',
  additionalStyles,
  title,
}: IconProps) => {
  return (
    <StyledIcon
      aria-label={title}
      title={title}
      $additionalStyles={additionalStyles}
      $color={color}
      $fontSize={fontSize}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
