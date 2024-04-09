import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app'

// Constructs the virtual DOM and attatches the App component to it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
