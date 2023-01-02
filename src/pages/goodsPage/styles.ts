import { BaseHeaderOne, BaseSpan } from 'common/styles/baseComponents';
import styled from 'styled-components';

export const GoodsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const GoodsItemsContainer = styled.div`
  display: flex;
  margin: 1rem -1rem;
  flex-wrap: wrap;
  width: calc(100% + 2rem);
`;

export const HeaderTitle = styled(BaseHeaderOne)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const HeaderSpan = styled(BaseSpan)`
  font-size: ${({ theme }) => `${theme.fontSizes.h1}rem`};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;
