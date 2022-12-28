import { BaseHeaderSix } from 'common/styles/baseComponents';
import styled from 'styled-components';

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const OrdersItemsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  width: 100%;
  align-items: flex-start;
`;

export const DeliveryInformationWrapper = styled.div``;

export const OrderItemCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary[100]};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media ${({ theme }) => theme.device.tablet} {
    flex-grow: 0;
    flex-basis: 49%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    flex-basis: 32.5%;
  }
`;

export const NameField = styled(BaseHeaderSix)`
  flex-basis: 6rem;
  flex-shrink: 0;
`;

export const InformationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
