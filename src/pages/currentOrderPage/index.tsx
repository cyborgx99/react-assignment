import { itemsSelector, useCartStore } from 'common/context/cartContextProvider';
import { CardActionTypes } from 'common/context/types';
import { useCreateOrderMutation } from 'common/mutations/order/useCreateOrder';
import React, { useState } from 'react';
import { dateToYyyyMmDd } from 'utils/dateUtils';
import CurrentOrderForm from './currentOrderForm';
import OrderNoItemsMessage from './orderNoItemsMessage';
import OrderSuccessMessage from './orderSuccessMessage';
import { CurrentOrderPageContainer } from './styles';
import { CurrentOrderFormInterface } from './types';

const CurrentOrderPage = () => {
  const [items] = useCartStore(itemsSelector);
  const { mutateAsync, isLoading, error } = useCreateOrderMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [, dispatch] = useCartStore(() => null);

  const handleOrder = async (formData: CurrentOrderFormInterface) => {
    if (items.length === 0) return;

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
      {!isSuccess && items.length === 0 && <OrderNoItemsMessage />}
      {isSuccess && items.length === 0 && <OrderSuccessMessage />}
      {!isSuccess && items.length > 0 && (
        <CurrentOrderForm onHandleOrder={handleOrder} isLoading={isLoading} error={error} />
      )}
    </CurrentOrderPageContainer>
  );
};

export default CurrentOrderPage;
