import FormInput from 'components/input/formInput';
import React from 'react';
import { StyledForm } from './styles';

const CurrentOrderForm = () => {
  return (
    <StyledForm>
      <FormInput name='name' type='text' label='Name' />
      <FormInput name='lastName' type='text' label='Last name' />
      <FormInput name='email' type='text' label='Email' />
      <FormInput name='phone' type='text' label='Phone' />
      <FormInput name='address' type='text' label='Address' />
      <FormInput name='city' type='text' label='City' />
    </StyledForm>
  );
};

export default CurrentOrderForm;
