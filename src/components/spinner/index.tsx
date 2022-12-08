import React from 'react';

import { AnimatedLoader, InnerOne, InnerThree, InnerTwo, Loader } from './styles';
import { SpinnerProps, SpinnerComponentTypes } from './types';

const Spinner = ({ size = 'small', type = 'regular' }: SpinnerProps) => {
  const SpinnerComponent: SpinnerComponentTypes = {
    regular: <Loader $size={size} />,
    animated: (
      <AnimatedLoader $size={size}>
        <InnerOne />
        <InnerTwo />
        <InnerThree />
      </AnimatedLoader>
    ),
  };

  return SpinnerComponent[type];
};

export default Spinner;
