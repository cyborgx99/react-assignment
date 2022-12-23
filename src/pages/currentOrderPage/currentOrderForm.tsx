import FormInput from 'components/input/formInput';
import { Form } from 'formik';
import React from 'react';

const CurrentOrderForm = () => {
  return (
    <Form>
      <FormInput name='name' type='text' label='Name' />
      <FormInput name='lastName' type='text' label='Last name' />
      <FormInput name='email' type='text' label='Email' />
      <FormInput name='phone' type='text' label='Phone' />
      <FormInput name='address' type='text' label='Address' />
      <FormInput name='city' type='text' label='City' />
    </Form>
  );
};

export default CurrentOrderForm;
