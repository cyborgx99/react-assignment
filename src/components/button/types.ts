import { ColorStringPathType, CssStyleProps } from 'common/types/commonStyle.types';

export interface StyledButtonPropsInterface {
  $color?: ColorStringPathType;
  $backgroundColor?: ColorStringPathType;
  $additionalStyles?: CssStyleProps;
}

export interface ButtonPropsInterface {
  text?: string;
  type?: 'button' | 'submit';
  backgroundColor?: ColorStringPathType;
  color?: ColorStringPathType;
  additionalStyles?: CssStyleProps;
  onClick: () => void;
}
