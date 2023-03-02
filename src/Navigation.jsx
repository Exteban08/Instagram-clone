import React from 'react';
import Profile from './components/Profile';
import Content from './components/Content';
import Menu from './components/Menu';
import Search from './components/Search';
import Explore from './components/Explore';
import Reels from './components/Reels';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Create from './components/Create';

function HomeNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Content />
    </div>
  )
};

function SearchNavigation() {
  return (
    <div className="flex h-full">
      <Search />
      <Content />
    </div>
  )
};

function ExploreNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Explore />
    </div>
  )
};

function ReelsNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Reels />
    </div>
  )
};

function MessagesNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Messages />
    </div>
  )
};

function NotificationsNavigation() {
  return (
    <div className="flex h-full">
      <Notifications />
      <Content />
    </div>
  )
};

function CreateNavigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Create />
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

export {
  HomeNavigation,
  SearchNavigation,
  ExploreNavigation,
  ReelsNavigation,
  MessagesNavigation,
  NotificationsNavigation,
  CreateNavigation,
  ProfileNavigation,
};
