import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsHouseDoorFill,
  BsSearch,
  BsCompass,
  BsCaretRightSquare,
  BsMessenger,
  BsSuitHeart,
  BsFillPlusSquareFill,
  BsFillFilePersonFill,
} from "react-icons/bs";

const MenuItems = [
  {
    id: 1,
    component: BsHouseDoorFill,
    text: 'Home',
    path: '/home',
  },
  {
    id: 2,
    component: BsSearch,
    text: 'Search',
    path: '/search',
  },
  {
    id: 3,
    component: BsCompass,
    text: 'Explore',
    path: '/explore',
  },
  {
    id: 4,
    component: BsCaretRightSquare,
    text: 'Reels',
    path: '/reels',
  },
  {
    id: 5,
    component: BsMessenger,
    text: 'Messages',
    path: '/messages',
  },
  {
    id: 6,
    component: BsSuitHeart,
    text: 'Notifications',
    path: '/notifications',
  },
  {
    id: 7,
    component: BsFillPlusSquareFill,
    text: 'Create',
    path: '/create',
  },
  {
    id: 8,
    component: BsFillFilePersonFill,
    text: 'Profile',
    path: '/profile',
  },
];

function Menu() {
  return (
    <div className='flex flex-col h-screen w-full max-w-[245px] bg-black text-white border-r border-white fixed'>
      <h1 className='px-4 py-6 text-lg font-serif font-bold italic fixed'>Instagram</h1>
      <ul className='flex flex-col w-60 gap-2 fixed mt-20'>
          {MenuItems.map((item) => (
            <li key={item.id} className='flex flex-row px-4 py-2 gap-4 items-center text-white hover:bg-zinc-800 rounded-full'>
              <item.component />
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Menu;
