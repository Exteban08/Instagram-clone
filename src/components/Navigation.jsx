import React from 'react';
import Profile from './Profile';
import Content from './Content';
import Menu from './Menu';

function HomeNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Content />
    </div>
  )
};

function ProfileNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Profile />
    </div>
  )
};

export { HomeNavigation, ProfileNavigation };
