import React from 'react';
import { StyledInput } from './styles';
import { RegularInputComponentProps } from './types';

const InputComponent = ({
  onChange,
  value,
  type,
  title,
  placeholder,
}: RegularInputComponentProps) => {
  return (
    <StyledInput
      onChange={onChange}
      value={value}
      type={type}
      title={title}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
