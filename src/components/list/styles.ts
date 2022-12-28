import { BaseSpan } from 'common/styles/baseComponents';
import styled, { css } from 'styled-components';

export const StyledList = styled.ul<{ $type?: 'orderPage' }>`
  list-style: none;

  ${({ $type }) =>
    $type !== 'orderPage' &&
    css`
      @media ${({ theme }) => theme.device.tablet} {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;

        > * {
          flex-basis: 45%;
          flex-grow: 1;
        }
      }
    `}
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[100]};

  > :first-child {
    flex: 1;
  }

  > :nth-child(2) {
    flex: 1;
  }
`;

export const ItemName = styled(BaseSpan)`
  ::before {
    content: '• ';
    color: ${({ theme }) => theme.colors.primary[100]};
    vertical-align: middle;
    font-size: 1.5rem;
  }

  flex-basis: 33%;
`;
