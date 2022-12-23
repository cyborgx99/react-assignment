import { BaseSpan } from 'common/styles/baseComponents';
import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[100]};
`;

export const ItemName = styled(BaseSpan)`
  ::before {
    content: '• ';
    color: ${({ theme }) => theme.colors.primary[100]};
    vertical-align: middle;
    font-size: 1.5rem;
  }
`;
