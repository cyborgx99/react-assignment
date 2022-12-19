import styled, { css } from 'styled-components';

export const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
`;

export const PaginationItem = styled.li``;

export const PaginationButton = styled.button<{
  $isArrow?: boolean;
  $isSelected?: boolean;
  disabled?: boolean;
}>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.25rem 0.75em;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;

  :focus {
    background-color: ${({ theme }) => theme.colors.secondary[100]};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text.white};

    > span {
      color: ${({ theme }) => theme.colors.text.white};
    }
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.primary[100]};
        color: ${({ theme }) => theme.colors.text.white};

        > span {
          border-radius: ${({ theme }) => theme.borderRadius.default};
          color: ${({ theme }) => theme.colors.text.white};
        }
      }
    `}

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary[100]};
      color: ${({ theme }) => theme.colors.text.white};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.background[100]};

      > span {
        color: ${({ theme }) => theme.colors.background[500]};
      }
    `}
`;
