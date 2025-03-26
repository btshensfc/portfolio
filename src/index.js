import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes';
import { Provider } from "./components/ui/provider"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <BrowserRouter basename="/portfolio">
            <AppRoutes />
        </BrowserRouter>
    </Provider>
  );