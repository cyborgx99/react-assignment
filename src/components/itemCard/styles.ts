import styled, { css } from 'styled-components';

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 20rem;
`;

export const ItemCardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
  margin: 1rem;
  width: calc((100% - 2 * 1rem) / 1);

  @media ${({ theme }) => theme.device.tablet} {
    width: calc((100% - 4 * 1rem) / 2);
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: calc((100% - 6 * 1rem) / 3);
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
  width: 2rem;
`;
