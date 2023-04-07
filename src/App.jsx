import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  HomeNavigation,
  SearchNavigation,
  ExploreNavigation,
  ReelsNavigation,
  MessagesNavigation,
  NotificationsNavigation,
  CreateNavigation,
  ProfileNavigation,
  LoginNavigation,
  SignUpNavigation,
} from './Navigation';
import ErrorPage from './components/ErrorPage';
import './styles/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<LoginNavigation />} />
    <Route path='/sign-up' element={<SignUpNavigation />} />
    <Route path='/home' element={<HomeNavigation />} />
    <Route path='/search' element={<SearchNavigation />} />
    <Route path='/explore' element={<ExploreNavigation />} />
    <Route path='/reels' element={<ReelsNavigation />} />
    <Route path='/messages' element={<MessagesNavigation />} />
    <Route path='/notifications' element={<NotificationsNavigation />} />
    <Route path='/create' element={<CreateNavigation />} />
    <Route path='/profile' element={<ProfileNavigation />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
};

export default App;
