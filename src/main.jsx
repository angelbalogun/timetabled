import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global styles
import App from './App.jsx';  // Import App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);