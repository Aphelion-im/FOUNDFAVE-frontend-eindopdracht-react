import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import FaveContextProvider from './context/FaveContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <FaveContextProvider>
          <App />
        </FaveContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
