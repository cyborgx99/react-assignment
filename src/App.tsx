import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/styles/globalStyles';
import { myTheme } from './common/styles/theme';
import AppRoutes from './routes/routes';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
