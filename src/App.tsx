import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { myTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <h1>ew</h1>
    </ThemeProvider>
  );
}

export default App;
