import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/core.css';
import './assets/css/loader.css';
import './assets/css/BebasNeue.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
