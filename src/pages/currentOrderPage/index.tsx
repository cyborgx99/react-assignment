import { useCartStore } from 'common/context/cartContextProvider';
import { CardActionTypes } from 'common/context/types';
import { useCreateOrderMutation } from 'common/mutations/order/useCreateOrder';
import { BaseHeaderThree } from 'common/styles/baseComponents';
import Button from 'components/button';
import OrderList from 'components/list';
import { Formik } from 'formik';
import { reduceCartToTotalPrice } from 'pages/cartPage/utils';
import React, { useState } from 'react';
import { dateToYyyyMmDd } from 'utils/dateUtils';
import CurrentOrderForm from './currentOrderForm';
import OrderSuccessMessage from './orderSuccessMessage';
import { CurrentOrderPageContainer, DetailsHeader, OrderFormWrapper } from './styles';
import { CurrentOrderFormInterface } from './types';
import { currentOrderFormInitialValues, currentOrderFormValidationSchema } from './utils';

const CurrentOrderPage = () => {
  const [items] = useCartStore((store) => store.items);
  const { mutateAsync, isLoading } = useCreateOrderMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [, dispatch] = useCartStore(() => null);

  const handleOrder = async (formData: CurrentOrderFormInterface) => {
    const response = await mutateAsync({
      newOrder: {
        deliveryInformation: formData,
        orderItems: items,
        date: dateToYyyyMmDd(new Date()),
      },
    });

    if (response) {
      setIsSuccess(true);
      dispatch({
        type: CardActionTypes.CLEAR_CART,
      });
    }
  };

  return (
    <CurrentOrderPageContainer>
      {isSuccess ? (
        <OrderSuccessMessage />
      ) : (
        <Formik
          validationSchema={currentOrderFormValidationSchema}
          initialValues={currentOrderFormInitialValues}
          onSubmit={handleOrder}
        >
          {({ handleSubmit }) => (
            <OrderFormWrapper>
              <DetailsHeader>Order details</DetailsHeader>
              <BaseHeaderThree>Delivery: </BaseHeaderThree>
              <CurrentOrderForm />
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
            </OrderFormWrapper>
          )}
        </Formik>
      )}
    </CurrentOrderPageContainer>
  );
};

export default CurrentOrderPage;
