import styled, { css } from 'styled-components';
import { BaseHeaderOne, BaseSpan } from 'common/styles/baseComponents';

export const headerIconAdditionalStyles = css`
  margin-right: auto;
`;

export const NavButton = styled.button`
  background: none;
  outline: none;
  display: none;

  :hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
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

export const NavigationContainer = styled.nav<{ $isShown: boolean }>`
  position: fixed;
  display: none;
  flex-direction: column;
  height: calc(100% - 3.625rem);
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.text[100]};
  right: 0;
  bottom: 0;
  transform: ${({ $isShown }) => ($isShown ? 'translate(0, 0)' : 'translate(100%, 0)')};
  transition: transform 0.5s ease-out;
  padding: 1rem;
  padding-top: 0;
  z-index: 1;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;
