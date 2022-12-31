import { BaseLabel } from 'common/styles/baseComponents';
import { useField } from 'formik';
import React from 'react';
import { InputContainer, StyledFormInput } from './styles';
import { FormInputComponentProps } from './types';

const FormInput = ({ label = '', type = 'text', name }: FormInputComponentProps) => {
  const [field, { error, touched }] = useField(name);
  const hasError = Boolean(touched && error);

  return (
    <InputContainer>
      <BaseLabel>{label}</BaseLabel>
      <StyledFormInput
        aria-label={name}
        src={field.value}
        $hasError={hasError}
        {...field}
        name={name}
        type={type}
      />
      <BaseLabel $color='danger.200' $fontSize={0.75}>
        {hasError ? error : ''}
      </BaseLabel>
    </InputContainer>
  );
};

export default FormInput;
