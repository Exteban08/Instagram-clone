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

const MenuItems = [
  {
    component: BsHouseDoorFill,
    text: 'Home',
  },
  {
    component: BsSearch,
    text: 'Search',
  },
  {
    component: BsCompass,
    text: 'Explore',
  },
  {
    component: BsCaretRightSquare,
    text: 'Reels',
  },
  {
    component: BsMessenger,
    text: 'Messages',
  },
  {
    component: BsSuitHeart,
    text: 'Notifications',
  },
  {
    component: BsFillPlusSquareFill,
    text: 'Create',
  },
  {
    component: BsFillFilePersonFill,
    text: 'Profile',
  },
];

function Menu() {
  return (
    <div className='flex flex-col w-full max-w-[245px] bg-black text-white h-100% border-r border-white'>
        <h1 className='px-4 py-6 text-lg font-serif font-bold italic fixed'>Instagram</h1>
        <ul className='flex flex-col w-60 gap-2 fixed mt-20 '>
            {MenuItems.map((item, index) => (
              <li key={index} className='flex flex-row px-4 py-2 gap-4 items-center text-white hover:bg-zinc-800 rounded-full'>
                <item.component />
                {item.text}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu;
