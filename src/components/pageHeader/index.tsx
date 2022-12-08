import React from 'react';
import Icon from '../icon';
import { headerIconAdditionalStyles, HeaderSpan, HeaderTitle, StyledHeader } from './styles';

const PageHeader = () => {
  return (
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
    </StyledHeader>
  );
};

export default PageHeader;
