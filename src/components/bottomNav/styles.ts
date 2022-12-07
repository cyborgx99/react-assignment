import styled, { css } from 'styled-components';
import { BaseLink } from 'common/styles/baseComponents';

export const StyledBottomNav = styled.nav`
  min-height: 3rem;
  background-color: ${({ theme }) => theme.colors.text[100]};
  display: flex;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
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

export const CartCount = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  color: ${({ theme }) => theme.colors.text.white};
  border-radius: 50%;
  position: absolute;
  top: 0.15rem;
  left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
