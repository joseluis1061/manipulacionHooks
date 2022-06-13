import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContex from './context/ThemeContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContex.Provider value='#04adc7'>
      <App/>
    </ThemeContex.Provider>
  </React.StrictMode>
);

reportWebVitals();
