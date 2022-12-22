import React from 'react';
import SuccessMessage from 'components/success';
import Button from 'components/button';
import { OrderSuccessMessageWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { basePathKeys } from 'routes/pathKeys';

const OrderSuccessMessage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(basePathKeys.HOME);
  };

  const goToMyOrders = () => {
    navigate(basePathKeys.ORDERS);
  };

  return (
    <OrderSuccessMessageWrapper>
      <SuccessMessage message='Your order has been submitted successfully' />
      <Button backgroundColor='primary.100' text='Home page' onClick={goHome} />
      <Button backgroundColor='success.300' text='My orders' onClick={goToMyOrders} />
    </OrderSuccessMessageWrapper>
  );
};

export default OrderSuccessMessage;
