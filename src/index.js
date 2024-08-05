import ReactDOM from 'react-dom'
import { ThemeProvider } from './contexts/theme';
import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
