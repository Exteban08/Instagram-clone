import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../routes/Profile';
import Navigation from './Navigation';
import ErrorPage from './ErrorPage';
import '../styles/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<Navigation />}>
      <Route path='profile' element={<Profile />} />
    </Route>
    <Route path='*' element={<ErrorPage />} />
  </Routes>
};

export default App;
