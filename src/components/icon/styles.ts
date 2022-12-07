import styled from 'styled-components';
import get from 'lodash.get';
import { StyledIconProps } from './types';

export const StyledIcon = styled.span<StyledIconProps>`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${({ $fontSize }) => `${$fontSize}rem`};
  width: ${({ $fontSize }) => `${$fontSize}rem`};
  height: ${({ $fontSize }) => `${$fontSize}rem`};
  display: inline-block;
  line-height: 1;
  transition: color 0.5s ease-in-out;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: ${({ theme, $color }) => get(theme.colors, $color)};
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';

  ${({ $additionalStyles }) => $additionalStyles};
`;
