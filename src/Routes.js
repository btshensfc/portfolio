import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';

const AppRoutes = () => {
  return (
    <>
      <Navbar /> {/* Persistent navbar */}
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

export default AppRoutes;