import NavigationBar from 'components/navigation';
import React, { useState } from 'react';
import Icon from '../icon';
import {
  headerIconAdditionalStyles,
  HeaderSpan,
  HeaderTitle,
  NavButton,
  StyledHeader,
  NavigationContainer,
} from './styles';

const PageHeader = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavbarOpen((previous) => !previous);
  };

  return (
    <>
      <StyledHeader>
        <Icon
          title='Home'
          additionalStyles={headerIconAdditionalStyles}
          color='text.white'
          fontSize={2}
          name='lunch_dining'
        />
        <HeaderTitle $color='text.white'>
          Food
          <HeaderSpan $color='secondary.100'>Hub</HeaderSpan>
        </HeaderTitle>
        <NavButton onClick={toggleMenu}>
          <Icon
            title='Menu'
            color='text.white'
            fontSize={2}
            name={isNavbarOpen ? 'menu_open' : 'menu'}
          />
        </NavButton>
      </StyledHeader>
      <NavigationContainer $isShown={isNavbarOpen}>
        <NavigationBar navType='side' />
      </NavigationContainer>
    </>
  );
};

export default PageHeader;
