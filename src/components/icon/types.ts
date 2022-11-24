import { ColorStringPathType, FontSizeValues } from '~/common.types';

export interface IconProps {
  name: string;
  color?: ColorStringPathType;
  fontSize?: FontSizeValues;
}

export type StyledIconProps = {
  $fontSize: FontSizeValues;
  $color: ColorStringPathType;
};
