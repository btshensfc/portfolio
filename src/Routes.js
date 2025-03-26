import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter
import Navbar from './components/Navbar';
import App from './App';

const AppRoutes = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;