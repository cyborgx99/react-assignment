import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { myTheme } from 'common/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'common/styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import ReactQueryProvider from 'queryProvider';
import CartContextProvider from 'common/context/cartContextProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ReactQueryProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ReactQueryProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
