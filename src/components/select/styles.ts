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

  .react-select__option {
    border-radius: 4px;
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.secondary[200]};
  }

  .react-select__option--is-active {
    background-color: ${({ theme }) => theme.colors.secondary[100]};
  }

  .react-select__option:active {
    background-color: ${({ theme }) => theme.colors.secondary[100]};
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors.secondary[300]};
    color: ${({ theme }) => theme.colors.text.white};
  }

  .react-select__control.react-select__control--is-focused {
    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
    }
  }
`;
