import React from 'react';
import ReactDOM from 'react-dom';

import './styles/tailwind.css';
import './styles/appstyle.css';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
