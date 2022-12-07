import React from 'react';
import { BaseHeaderSix } from 'common/styles/baseComponents';
import BottomNav from '../bottomNav';
import { StyledFooter } from './styles';

const PageFooter = () => {
  return (
    <>
      <StyledFooter>
        <BaseHeaderSix $color='text.white'>© All rights reserved (Apparently)</BaseHeaderSix>
      </StyledFooter>
      <BottomNav />
    </>
  );
};

export default PageFooter;
