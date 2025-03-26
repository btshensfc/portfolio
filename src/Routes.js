import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';

const AppRoutes = () => {
  return (
    <HashRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          {/* Add catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;