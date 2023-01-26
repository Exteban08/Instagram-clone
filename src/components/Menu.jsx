import React from 'react';

const MenuItems = ['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications' ,'Create' ,'Profile']

function Menu() {
  return (
    <div className='flex flex-col w-full max-w-[245px] bg-black text-white h-100%'>
        <h1 className='px-4 py-6 text-lg font-bold'>Instagram</h1>
        <ul className='flex flex-col gap-2'>
            {MenuItems.map(item => (
              <li className='px-4 py-2 text-white hover:bg-zinc-800'>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Menu