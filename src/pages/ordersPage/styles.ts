import { BaseHeaderOne, BaseHeaderSix } from 'common/styles/baseComponents';

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
  width: calc(100% + 2rem);
  margin: 1rem -1rem;
  flex-wrap: wrap;
`;

export const DeliveryInformationWrapper = styled.div``;

export const OrderItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.secondary[100]};
  padding: 1rem;
  margin: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: calc((100% - 2 * 1rem) / 1);

  @media ${({ theme }) => theme.device.tablet} {
    width: calc((100% - 4 * 1rem) / 2);
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: calc((100% - 6 * 1rem) / 3);
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
  margin-top: auto;
`;

export const HeaderTitle = styled(BaseHeaderOne)`
  text-align: center;
  margin-top: 1rem;
`;
