import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { myTheme } from './styles/theme';
import React from 'react';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <h1>Check</h1>
    </ThemeProvider>
  );
};

export default App;
