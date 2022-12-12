import get from 'lodash.get';
import styled from 'styled-components';
import { StyledButtonPropsInterface } from './types';

export const StyledButton = styled.button<StyledButtonPropsInterface>`
  width: 100%;
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  background-color: ${({ theme, $backgroundColor }) =>
    get(theme.colors, $backgroundColor ?? 'primary.100')};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.white')};
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;

  ${({ $additionalStyles }) => $additionalStyles};
`;
