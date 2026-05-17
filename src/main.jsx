import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import FaveContextProvider from './context/FaveContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router 
      future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}
    >
      <AuthContextProvider>
        <FaveContextProvider>
          <App />
        </FaveContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
