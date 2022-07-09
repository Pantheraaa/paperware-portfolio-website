import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// "start": “export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start”,
// The above start is for SSL creation with react