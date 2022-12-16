import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: none;
  background-color: ${({ theme }) => theme.colors.text[100]};
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacings.half}rem ${theme.spacings.one}rem`};

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;
