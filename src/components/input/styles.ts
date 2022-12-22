import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
  width: 100%;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
  }
`;
