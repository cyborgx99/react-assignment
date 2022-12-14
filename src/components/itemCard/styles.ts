import styled, { css } from 'styled-components';

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  height: 20rem;
`;

export const ItemCardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: 100%;
  flex-grow: 1;
  flex-basis: 50%;

  :last-child {
    margin-right: auto;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-grow: 0;
    flex-basis: 49%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    flex-basis: 32.5%;
  }
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AmountContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const amountButtonStyles = css`
  padding: 0 0.5rem;
  margin: 0;
  width: min-content;
`;
