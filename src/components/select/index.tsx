import React from 'react';
import { StyledSelect } from './styles';
import { SelectComponentProps } from './types';

const SelectComponent = <V,>({ options, onChange, value }: SelectComponentProps<V>) => {
  return (
    <StyledSelect
      classNamePrefix='react-select'
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

export default SelectComponent;
