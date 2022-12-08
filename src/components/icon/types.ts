import { CssStyleProps, ColorStringPathType, FontSizeValues } from 'common/types/common.types';

export interface IconProps {
  name: string;
  color?: ColorStringPathType;
  fontSize?: FontSizeValues;
  additionalStyles?: CssStyleProps;
  title: string;
}

export type StyledIconProps = {
  $fontSize: FontSizeValues;
  $color: ColorStringPathType;
  $additionalStyles?: CssStyleProps;
};
