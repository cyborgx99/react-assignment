import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { MyTheme } from 'common/styles/types';
import { KeysUnion } from './helper.types';

export type ColorKeys = keyof MyTheme['colors'];

export type ColorStringPathType = Exclude<KeysUnion<MyTheme['colors']>, ColorKeys>;

export type CssStyleProps = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export type FontSizes = MyTheme['fontSizes'];
export type FontSizeValues = FontSizes[keyof FontSizes];
