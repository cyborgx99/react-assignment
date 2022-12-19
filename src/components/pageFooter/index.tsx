import React from 'react';
import { BaseHeaderSix } from 'common/styles/baseComponents';
import NavigationBar from '../navigation';
import { StyledFooter } from './styles';

const PageFooter = () => {
  return (
    <>
      <StyledFooter>
        <BaseHeaderSix $color='text.white'>© All rights reserved (Apparently)</BaseHeaderSix>
      </StyledFooter>
      <NavigationBar navType='bottom' />
    </>
  );
};

export default PageFooter;
