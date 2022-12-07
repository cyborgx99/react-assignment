import React from 'react';
import { basePathKeys } from 'routes/pathKeys';
import { BaseLink, BaseSpan } from 'common/styles/baseComponents';
import Icon from '../icon';
import { bottomNavIconAdditionalStyles, CartCount, CartLink, StyledBottomNav } from './styles';

const BottomNav = () => {
  return (
    <StyledBottomNav>
      <BaseLink to={basePathKeys.HOME}>
        {({ isActive }) => (
          <Icon
            title='Goods'
            additionalStyles={bottomNavIconAdditionalStyles}
            fontSize={2}
            color={isActive ? 'primary.100' : 'text.white'}
            name='store'
          />
        )}
      </BaseLink>
      <CartLink to={basePathKeys.CART}>
        {({ isActive }) => (
          <>
            <Icon
              title='Shopping cart'
              additionalStyles={bottomNavIconAdditionalStyles}
              fontSize={2}
              color={isActive ? 'primary.100' : 'text.white'}
              name='shopping_cart'
            />
            <CartCount>
              {/* TODO: Get actual cart data */}
              <BaseSpan $color='text.white'>1</BaseSpan>
            </CartCount>
          </>
        )}
      </CartLink>
      <BaseLink to={basePathKeys.ORDERS}>
        {({ isActive }) => (
          <Icon
            title='Order lists'
            additionalStyles={bottomNavIconAdditionalStyles}
            fontSize={2}
            color={isActive ? 'primary.100' : 'text.white'}
            name='list_alt'
          />
        )}
      </BaseLink>
    </StyledBottomNav>
  );
};

export default BottomNav;
