import { BaseHeaderThree } from 'common/styles/baseComponents';
import Icon from 'components/icon';
import React from 'react';
import { iconStyles, SuccessContainer, SuccessIconWrapper, StyledMessage } from './styles';
import { SuccessMessagePropsInterface } from './types';

const SuccessMessage = ({ message }: SuccessMessagePropsInterface) => {
  return (
    <SuccessContainer>
      <BaseHeaderThree>Success!</BaseHeaderThree>
      <SuccessIconWrapper>
        <Icon
          title='Success'
          additionalStyles={iconStyles}
          color='text.white'
          fontSize={2}
          name='done'
        />
      </SuccessIconWrapper>
      <StyledMessage>{message}</StyledMessage>
    </SuccessContainer>
  );
};

export default SuccessMessage;
