import React from 'react';
import { HashRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './Routes';
import { Provider } from "./components/ui/provider"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename="/portfolio">
    <Provider>
      <React.StrictMode>
        <AppRoutes />  
      </React.StrictMode>
    </Provider>
  </HashRouter>
);
