import { CssStyleProps } from 'common/types/commonStyle.types';

export type LoaderSizeType = 'small' | 'medium' | 'large';
export type LoaderTypes = 'regular' | 'animated';

export interface SpinnerProps {
  size?: LoaderSizeType;
  type?: LoaderTypes;
}

export type LoaderSizes = {
  [key in LoaderSizeType]: CssStyleProps;
};

export type SpinnerComponentTypes = {
  [key in LoaderTypes]: JSX.Element;
};
