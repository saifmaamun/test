import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/Global';
import MainBuilder from './routes/MainBuilder';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainBuilder />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
