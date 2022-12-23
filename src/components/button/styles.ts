import get from 'lodash.get';
import styled, { css } from 'styled-components';
import { StyledButtonPropsInterface } from './types';

export const StyledButton = styled.button<StyledButtonPropsInterface>`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  background-color: ${({ theme, $backgroundColor }) =>
    get(theme.colors, $backgroundColor ?? 'primary.100')};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.white')};
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;
  transition: scale 0.25s ease-in-out, font-weight 0.25s ease-in-out;

  :hover {
    scale: 1.025;
    font-weight: bold;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.background[100]};
      color: ${({ theme }) => theme.colors.background[300]};

      :hover {
        scale: 1;
        font-weight: normal;
        cursor: default;
      }
    `};

  ${({ $additionalStyles }) => $additionalStyles};
`;
