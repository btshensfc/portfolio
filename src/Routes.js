import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;