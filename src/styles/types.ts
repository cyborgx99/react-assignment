export interface MyTheme {
  //Font sizes in REM
  fontSizes: {
    h1: 1.75;
    h2: 1.625;
    h3: 1.5;
    h4: 1.375;
    h5: 1.25;
    h6: 1.125;
    default: 1;
    small: 0.75;
  };
  lineHeights: {
    heading: number;
    paragraph: number;
  };
  colors: {
    primary: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
    };
    secondary: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
    };
    success: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
    };
    danger: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
    };
    text: {
      '100': string;
    };
    background: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
    };
  };
}
