import { itemsSelector, useCartStore } from 'common/context/cartContextProvider';
import { BaseHeaderThree, BaseParagraph } from 'common/styles/baseComponents';
import Button from 'components/button';
import FormInput from 'components/input/formInput';
import OrderList from 'components/list';
import { Formik } from 'formik';
import { reduceCartToTotalPrice } from 'pages/cartPage/utils';
import React from 'react';
import { DetailsHeader, OrderFormWrapper, StyledForm } from './styles';
import { CurrentOrderFormPropsInterface } from './types';
import { currentOrderFormInitialValues, currentOrderFormValidationSchema } from './utils';

const CurrentOrderForm = ({ onHandleOrder, isLoading, error }: CurrentOrderFormPropsInterface) => {
  const [items] = useCartStore(itemsSelector);
  return (
    <Formik
      validationSchema={currentOrderFormValidationSchema}
      initialValues={currentOrderFormInitialValues}
      onSubmit={onHandleOrder}
    >
      {({ handleSubmit }) => (
        <OrderFormWrapper>
          <DetailsHeader>Order details</DetailsHeader>
          <BaseHeaderThree>Delivery: </BaseHeaderThree>
          <StyledForm>
            <FormInput name='name' type='text' label='Name' />
            <FormInput name='lastName' type='text' label='Last name' />
            <FormInput name='email' type='text' label='Email' />
            <FormInput name='phone' type='text' label='Phone' />
            <FormInput name='address' type='text' label='Address' />
            <FormInput name='city' type='text' label='City' />
          </StyledForm>
          <BaseHeaderThree>Order list: </BaseHeaderThree>
          <OrderList items={items} />
          <BaseHeaderThree>Total: ${reduceCartToTotalPrice(items)} </BaseHeaderThree>
          <Button
            isLoading={isLoading}
            type='button'
            backgroundColor='secondary.100'
            text='Order'
            onClick={handleSubmit}
          />
          <BaseParagraph $color='danger.100'>{error?.message}</BaseParagraph>
        </OrderFormWrapper>
      )}
    </Formik>
  );
};

export default CurrentOrderForm;
