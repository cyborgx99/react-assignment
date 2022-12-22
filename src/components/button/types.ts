import { ColorStringPathType, CssStyleProps } from 'common/types/commonStyle.types';

export interface StyledButtonPropsInterface {
  $color?: ColorStringPathType;
  $backgroundColor?: ColorStringPathType;
  $additionalStyles?: CssStyleProps;
  disabled?: boolean;
}

export interface ButtonPropsInterface {
  text?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  backgroundColor?: ColorStringPathType;
  color?: ColorStringPathType;
  additionalStyles?: CssStyleProps;
  onClick: () => void;
}
