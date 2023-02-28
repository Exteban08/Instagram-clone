import React from 'react';
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
import { Link } from 'react-router-dom';

const MenuItems = [
  {
    id: 1,
    component: BsHouseDoorFill,
    text: 'Home',
  },
  {
    id: 2,
    component: BsSearch,
    text: 'Search',
  },
  {
    id: 3,
    component: BsCompass,
    text: 'Explore',
  },
  {
    id: 4,
    component: BsCaretRightSquare,
    text: 'Reels',
  },
  {
    id: 5,
    component: BsMessenger,
    text: 'Messages',
  },
  {
    id: 6,
    component: BsSuitHeart,
    text: 'Notifications',
  },
  {
    id: 7,
    component: BsFillPlusSquareFill,
    text: 'Create',
  },
  {
    id: 8,
    component: BsFillFilePersonFill,
    text: 'Profile',
  },
];

function Menu() {
  return (
    <div className='flex flex-col w-full max-w-[245px] bg-black text-white h-100% border-r border-white'>
        <h1 className='px-4 py-6 text-lg font-serif font-bold italic fixed'>Instagram</h1>
        <ul className='flex flex-col w-60 gap-2 fixed mt-20 '>
            {MenuItems.map((item) => (
              <li key={item.id} className='flex flex-row px-4 py-2 gap-4 items-center text-white hover:bg-zinc-800 rounded-full'>
                <item.component />
                <Link to={`profile/${item.id}`}>{item.text}</Link>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu;
