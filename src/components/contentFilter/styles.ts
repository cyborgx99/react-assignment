import { CssStyleProps } from 'common/types';
import styled from 'styled-components';

export const FilterContainer = styled.div<{ $additionalStyles?: CssStyleProps }>`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
    > * {
      flex-basis: 50%;
      flex-grow: 1;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    max-width: 38rem;
  }

  ${({ $additionalStyles }) => $additionalStyles};
`;
