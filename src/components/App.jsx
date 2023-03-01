import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeNavigation, ProfileNavigation } from './Navigation';
import ErrorPage from './ErrorPage';
import '../styles/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<HomeNavigation />} />
    <Route path='/profile' element={<ProfileNavigation />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
};

export default App;
