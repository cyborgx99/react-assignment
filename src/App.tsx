import React from 'react';
import QueryProvider from 'queryProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/styles/globalStyles';
import { myTheme } from './common/styles/theme';
import AppRoutes from './routes/routes';
import CartContextProvider from 'common/context/cartContextProvider';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <QueryProvider>
        <CartContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartContextProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
