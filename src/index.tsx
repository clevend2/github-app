import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (!localStorage.getItem('token')) {
  window.location.href = "/authenticate";
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
