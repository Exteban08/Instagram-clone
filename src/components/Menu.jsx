import React from 'react';

const MenuItems = [
  {
    text: 'Home',
  },
  {
    text: 'Search',
  },
  {
    text: 'Explore',
  },
  {
    text: 'Reels',
  },
  {
    text: 'Messages',
  },
  {
    text: 'Notifications',
  },
  {
    text: 'Create',
  },
  {
    text: 'Profile',
  },
];

function Menu() {
  return (
    <div className='flex flex-col w-full max-w-[245px] bg-black text-white h-100%'>
        <h1 className='px-4 py-6 text-lg font-bold'>Instagram</h1>
        <ul className='flex flex-col gap-2'>
            {MenuItems.map(item => (
              <li className='px-4 py-2 text-white hover:bg-zinc-800'>
                <span>{item.text}</span>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu;
