import styled, { css } from 'styled-components';

export const contentFilterAdditionalStyles = css`
  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: wrap;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-wrap: nowrap;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  justify-content: center;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    flex-basis: 50%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    align-items: center;
    justify-items: flex-start;

    > h3 {
      text-align: right;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  width: 100%;
  justify-content: space-between;
`;
