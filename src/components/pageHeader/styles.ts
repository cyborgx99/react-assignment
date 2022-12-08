import styled, { css } from 'styled-components';
import { BaseHeaderOne, BaseSpan } from 'common/styles/baseComponents';

export const headerIconAdditionalStyles = css`
  margin-right: auto;
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.text[100]};
  display: flex;
  text-align: center;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled(BaseHeaderOne)`
  text-align: center;
  margin-right: auto;
`;

export const HeaderSpan = styled(BaseSpan)`
  font-size: ${({ theme }) => `${theme.fontSizes.h1}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;
