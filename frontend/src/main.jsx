// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Qui importa il CSS di Bootstrap

// Importa il bundle JS di Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);