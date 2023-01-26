import React from 'react';
import Content from './Content';
import Menu from './Menu';

function Navigation() {
  return (
    <div className="flex h-full">
      <Menu />
      <Content />
    </div>
  )
}

export default Navigation;
