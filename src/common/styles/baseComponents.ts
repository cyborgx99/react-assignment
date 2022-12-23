import get from 'lodash.get';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ColorStringPathType, FontSizeValues } from '../types/commonStyle.types';

export const BaseLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: max-content;
`;

export const BaseHeaderOne = styled.h1<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h1}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseHeaderTwo = styled.h2<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h2}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseHeaderThree = styled.h3<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h3}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseHeaderFour = styled.h4<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h4}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseHeaderFive = styled.h5<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h5}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseHeaderSix = styled.h6<{ $color?: ColorStringPathType }>`
  font-size: ${({ theme }) => `${theme.fontSizes.h6}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseSpan = styled.span<{ $fontSize?: FontSizeValues; $color?: ColorStringPathType }>`
  font-size: ${({ $fontSize }) => `${$fontSize ?? 1}rem`};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseParagraph = styled.span<{
  $fontSize?: FontSizeValues;
  $color?: ColorStringPathType;
}>`
  font-size: ${({ $fontSize }) => `${$fontSize ?? 1}rem`};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
`;

export const BaseLabel = styled.label<{ $fontSize?: FontSizeValues; $color?: ColorStringPathType }>`
  font-size: ${({ $fontSize }) => `${$fontSize ?? 1}rem`};
  color: ${({ theme, $color }) => get(theme.colors, $color ?? 'text.100')};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};
  font-weight: 300;
`;
