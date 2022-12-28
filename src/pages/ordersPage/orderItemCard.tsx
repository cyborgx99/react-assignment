import { BaseHeaderFour, BaseParagraph } from 'common/styles/baseComponents';
import OrderList from 'components/list';
import React from 'react';
import {
  InformationWrapper,
  OrderItemCardWrapper,
  NameField,
  DeliveryInformationWrapper,
} from './styles';
import { OrderItemCardPropsInterface } from './types';
import { dateToDdMmYyyy } from 'utils/dateUtils';
import { reduceCartToTotalPrice } from 'pages/cartPage/utils';

const OrderItemCard = ({ order }: OrderItemCardPropsInterface) => {
  return (
    <OrderItemCardWrapper>
      <BaseHeaderFour>Delivery information:</BaseHeaderFour>
      <DeliveryInformationWrapper>
        <InformationWrapper>
          <NameField>Name</NameField>
          <BaseParagraph> {order.deliveryInformation.name} </BaseParagraph>
        </InformationWrapper>
        <InformationWrapper>
          <NameField>Last name</NameField>
          <BaseParagraph> {order.deliveryInformation.lastName} </BaseParagraph>
        </InformationWrapper>
        <InformationWrapper>
          <NameField>Email</NameField>
          <BaseParagraph> {order.deliveryInformation.email}</BaseParagraph>
        </InformationWrapper>
        <InformationWrapper>
          <NameField>Phone</NameField>
          <BaseParagraph> {order.deliveryInformation.phone} </BaseParagraph>
        </InformationWrapper>
        <InformationWrapper>
          <NameField>Address</NameField>
          <BaseParagraph> {order.deliveryInformation.address} </BaseParagraph>
        </InformationWrapper>
        <InformationWrapper>
          <NameField>City </NameField>
          <BaseParagraph> {order.deliveryInformation.city} </BaseParagraph>
        </InformationWrapper>
      </DeliveryInformationWrapper>
      <BaseHeaderFour>Order list:</BaseHeaderFour>
      <OrderList type='orderPage' items={order.orderItems} />
      <InformationWrapper>
        <NameField>Date: </NameField>
        <BaseParagraph>{dateToDdMmYyyy(order.date)}</BaseParagraph>
      </InformationWrapper>
      <BaseHeaderFour>Total: ${reduceCartToTotalPrice(order.orderItems)}</BaseHeaderFour>
    </OrderItemCardWrapper>
  );
};

export default OrderItemCard;
