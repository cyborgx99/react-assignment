import React from 'react';
import { basePathKeys } from 'routes/pathKeys';
import { BaseLink, BaseSpan } from 'common/styles/baseComponents';
import Icon from '../icon';
import {
  bottomNavIconAdditionalStyles,
  CartCount,
  CartLink,
  IconWrapper,
  LinkText,
  StyledBottomNav,
} from './styles';
import { NavigationBarPropsInterface } from './types';

const NavigationBar = ({ navType }: NavigationBarPropsInterface) => {
  return (
    <StyledBottomNav $navType={navType}>
      <BaseLink to={basePathKeys.HOME}>
        {({ isActive }) => (
          <IconWrapper>
            <Icon
              title='Goods'
              additionalStyles={bottomNavIconAdditionalStyles}
              fontSize={2}
              color={isActive ? 'primary.100' : 'text.white'}
              name='store'
            />
            <LinkText $color={isActive ? 'primary.100' : 'text.white'}>Shopping</LinkText>
          </IconWrapper>
        )}
      </BaseLink>
      <CartLink to={basePathKeys.CART}>
        {({ isActive }) => (
          <IconWrapper>
            <Icon
              title='Shopping cart'
              additionalStyles={bottomNavIconAdditionalStyles}
              fontSize={2}
              color={isActive ? 'primary.100' : 'text.white'}
              name='shopping_cart'
            />
            <LinkText $color={isActive ? 'primary.100' : 'text.white'}>Cart</LinkText>
            <CartCount>
              {/* TODO: Get actual cart data */}
              <BaseSpan $color='text.white'>1</BaseSpan>
            </CartCount>
          </IconWrapper>
        )}
      </CartLink>
      <BaseLink to={basePathKeys.ORDERS}>
        {({ isActive }) => (
          <IconWrapper>
            <Icon
              title='Order lists'
              additionalStyles={bottomNavIconAdditionalStyles}
              fontSize={2}
              color={isActive ? 'primary.100' : 'text.white'}
              name='list_alt'
            />
            <LinkText $color={isActive ? 'primary.100' : 'text.white'}>Order lists</LinkText>
          </IconWrapper>
        )}
      </BaseLink>
    </StyledBottomNav>
  );
};

export default NavigationBar;
