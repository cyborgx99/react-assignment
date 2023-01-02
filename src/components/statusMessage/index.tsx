import { BaseHeaderThree } from 'common/styles/baseComponents';
import Icon from 'components/icon';
import React from 'react';
import { iconStyles, SuccessContainer, SuccessIconWrapper, StyledMessage } from './styles';
import { SuccessMessagePropsInterface } from './types';

const StatusMessage = ({ message, type }: SuccessMessagePropsInterface) => {
  const isSuccess = type === 'success';
  return (
    <SuccessContainer>
      <BaseHeaderThree>{isSuccess ? 'Success!' : 'Oops!'}</BaseHeaderThree>
      <SuccessIconWrapper $isSuccess={isSuccess}>
        <Icon
          title={isSuccess ? 'Success' : 'Failure'}
          additionalStyles={iconStyles}
          color='text.white'
          fontSize={2}
          name={isSuccess ? 'done' : 'close'}
        />
      </SuccessIconWrapper>
      <StyledMessage>{message}</StyledMessage>
    </SuccessContainer>
  );
};

export default StatusMessage;
