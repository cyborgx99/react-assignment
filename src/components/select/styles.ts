import Select from 'react-select';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export const StyledSelect: StyledComponent<
  typeof Select,
  DefaultTheme,
  { $hasError?: boolean },
  string
> = styled(Select)`
  width: 100%;
  justify-self: flex-start;
  align-self: flex-start;

  .react-select__control {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    border: 2px solid ${({ theme }) => theme.colors.primary[100]};
    padding: 0.125rem;

    :hover {
      border: 2px solid ${({ theme }) => theme.colors.primary[200]};
    }

    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
    }
  }

  .react-select__control.react-select__control--is-focused {
    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
    }
  }
`;
