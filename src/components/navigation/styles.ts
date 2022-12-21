import styled, { css } from 'styled-components';
import { BaseLink, BaseSpan } from 'common/styles/baseComponents';

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const LinkText = styled(BaseSpan)`
  display: none;
  transition: color 0.5s ease-in-out;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

export const StyledBottomNav = styled.nav<{ $navType: 'bottom' | 'side' }>`
  min-height: 3rem;
  background-color: ${({ theme }) => theme.colors.text[100]};
  display: flex;
  justify-content: space-evenly;

  ${({ $navType }) =>
    $navType === 'bottom' &&
    css`
      @media ${({ theme }) => theme.device.tablet} {
        display: none;
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
    flex-direction: column;
  }
`;

export const bottomNavIconAdditionalStyles = css`
  &:hover {
    color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const CartLink = styled(BaseLink)`
  position: relative;
`;

export const CartCountContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 50%;
  position: absolute;
  top: -0.5rem;
  left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
`;
