import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import
import './index.css';
import AppRouter from './Routes/router'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
