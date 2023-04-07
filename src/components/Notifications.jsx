import React from 'react';
import { Link } from 'react-router-dom';

function Notifications() {
  return (
    <div className='flex flex-col h-screen w-full max-w-[245px] bg-black text-white border-r border-white fixed'>
      <Link className='px-4 py-6 text-lg font-serif font-bold italic fixed' to={'/home'}>Instagram</Link>
      <h1 className='px-4 py-6 text-lg font-serif font-bold italic fixed mt-10'>NOTIFICATIONS</h1>
    </div>
  );
};

export default Notifications;
