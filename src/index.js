import react from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <react.StrictMode>
      <App />
  </react.StrictMode>,
  
  document.getElementById('root')
);