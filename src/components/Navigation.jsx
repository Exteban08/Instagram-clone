import React from 'react';
import Profile from './Profile';
import Content from './Content';
import Menu from './Menu';
import Search from './Search';
import Explore from './Explore';
import Reels from './Reels';
import Messages from './Messages';
import Notifications from './Notifications';
import Create from './Create';

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
