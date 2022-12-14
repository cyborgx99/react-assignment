import React from 'react';
import StatusMessage from 'components/statusMessage';
import Button from 'components/button';
import { OrderMessageWrapper } from './styles';
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
    <OrderMessageWrapper>
      <StatusMessage type='success' message='Your order has been submitted successfully' />
      <Button backgroundColor='primary.100' text='Home page' onClick={goHome} />
      <Button backgroundColor='success.300' text='My orders' onClick={goToMyOrders} />
    </OrderMessageWrapper>
  );
};

export default OrderSuccessMessage;
