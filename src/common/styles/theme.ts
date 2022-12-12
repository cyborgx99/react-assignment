import { MyTheme } from './types';

export const myTheme: MyTheme = {
  fontSizes: {
    h1: 1.75,
    h2: 1.625,
    h3: 1.5,
    h4: 1.375,
    h5: 1.25,
    h6: 1.125,
    default: 1,
    textSmall: 0.75,
    double: 2,
  },
  borderRadius: {
    default: '10px',
  },
  device: {
    tablet: `(min-width: 600px)`,
    desktop: `(min-width: 1200px)`,
  },
  spacings: {
    half: 0.5,
    one: 1,
    oneAndHalf: 1.5,
    two: 2,
    twoAndHalf: 2.5,
    three: 3,
  },
  lineHeights: {
    heading: 1.2,
    paragraph: 1.5,
  },
  colors: {
    primary: {
      '100': '#5658D3',
      '200': '#464CC5',
      '300': '#3440B6',
      '400': '#1E35A8',
      '500': '#002A9A',
    },
    secondary: {
      '100': '#CE4613',
      '200': '#BE3703',
      '300': '#AE2800',
      '400': '#9E1600',
      '500': '#8E0000',
    },
    success: {
      '100': '#9DF27A',
      '200': '#86DB65',
      '300': '#70C450',
      '400': '#59AE3B',
      '500': '#429826',
    },
    danger: {
      '100': '#FF997E',
      '200': '#FF816A',
      '300': '#FF6956',
      '400': '#FF5042',
      '500': '#FF352F',
    },
    text: {
      '100': '#170312',
      white: '#FFFFFF',
    },
    background: {
      '100': '#E1DCDA',
      '200': '#CBC5C3',
      '300': '#B5AFAD',
      '400': '#9F9A98',
      '500': '#8B8583',
    },
  },
};
