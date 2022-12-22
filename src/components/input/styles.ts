import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
  width: 100%;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const border = css`
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
`;

const borderError = css`
  border: 2px solid ${({ theme }) => theme.colors.danger[300]};
`;

const outline = css`
  outline: 2px solid ${({ theme }) => theme.colors.primary[300]};
`;

const outlineError = css`
  outline: 2px solid ${({ theme }) => theme.colors.danger[400]};
`;

export const StyledFormInput = styled(StyledInput)<{ $hasError: boolean }>`
  ${({ $hasError }) => ($hasError ? borderError : border)};
  &:focus {
    ${({ $hasError }) => ($hasError ? outlineError : outline)};
  }
`;
