import Button from 'components/button';
import Message from 'components/statusMessage';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { basePathKeys } from 'routes/pathKeys';
import { OrderMessageWrapper } from './styles';

const OrderNoItemsMessage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(basePathKeys.HOME);
  };

  const goToMyOrders = () => {
    navigate(basePathKeys.ORDERS);
  };

  return (
    <OrderMessageWrapper>
      <Message type='failure' message='Your cart is empty. Please add more items!' />
      <Button backgroundColor='primary.100' text='Home page' onClick={goHome} />
      <Button backgroundColor='secondary.100' text='My orders' onClick={goToMyOrders} />
    </OrderMessageWrapper>
  );
};

export default OrderNoItemsMessage;
