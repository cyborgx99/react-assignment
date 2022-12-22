import { BaseHeaderTwo } from 'common/styles/baseComponents';
import styled from 'styled-components';

export const DetailsHeader = styled(BaseHeaderTwo)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const OrderSuccessMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
`;

export const OrderFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
`;

export const CurrentOrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
