import { MyTheme } from '~/styles/types';

export type KeysUnion<T, Cache extends string = ''> = T extends PropertyKey
  ? Cache
  : {
      [P in keyof T]: P extends string
        ? Cache extends ''
          ? KeysUnion<T[P], `${P}`>
          : Cache | KeysUnion<T[P], `${Cache}.${P}`>
        : never;
    }[keyof T];

export type ColorKeys = keyof MyTheme['colors'];
export type ColorStringPathType = Exclude<KeysUnion<MyTheme['colors']>, ColorKeys>;

export type FontSizes = MyTheme['fontSizes'];
export type FontSizeValues = FontSizes[keyof FontSizes];
