import { BaseHeaderTwo } from 'common/styles/baseComponents';
import { Form } from 'formik';
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
  width: 100%;
  margin: 1rem 0;

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 32rem;
  }

  @media ${({ theme }) => theme.device.desktop} {
    max-width: 44rem;
  }
`;

export const StyledForm = styled(Form)`
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > * {
      flex-grow: 1;
    }
  }
`;

export const CurrentOrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  align-items: center;
`;
