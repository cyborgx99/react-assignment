import React from 'react';
import { StyledIcon } from './styles';
import { IconProps } from './types';

const Icon = ({ name, fontSize = 1.5, color = 'primary.100' }: IconProps) => {
  return (
    <StyledIcon $color={color} $fontSize={fontSize}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
