import React from 'react';
import { BsSuitHeart, BsChat, BsBoxArrowUpRight, BsBookmark } from "react-icons/bs";
import { Outlet } from 'react-router-dom';

const users = [
  {
    image: 'https://loremflickr.com/640/480',
    name: 'Pedro Picapiedra',
  },
  {
    image: 'https://loremflickr.com/640/480',
    name: 'Pedro Picapiedra',
  },
  {
    image: 'https://loremflickr.com/640/480',
    name: 'Pedro Picapiedra',
  },
  {
    image: 'https://loremflickr.com/640/480',
    name: 'Pedro Picapiedra',
  },
  {
    image: 'https://loremflickr.com/640/480',
    name: 'Pedro Picapiedra',
  },
]

function Content() {
  return (
    <>
      <div className='flex justify-center w-full h-full bg-black p-10'>
        <div className='w-full flex flex-col max-w-[600px] gap-16'>
          <div className='flex gap-4'>
            {users.map((user, index) =>
              <div className='w-14'>
                <img key={index} className='w-14 h-14 rounded-full border-2 border-pink-600' src={user.image} />
                <p className='text-xs text-white truncate'>{user.name}</p>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-32'>
            {users.map((user, index) => 
              <div key={index}>
                <div className='flex flex-row gap-2 items-center text-white text-sm'>
                  <img className='w-10 h-10 rounded-full' src={user.image} />
                  <p className='font-bold'>{user.name}</p>
                </div>
                <img className='w-[600px] mt-2 border border-white' src={user.image} />
                <div className='flex flex-row gap-4 text-white mt-3'>
                  <BsSuitHeart className='w-6 h-6'/>
                  <BsChat className='w-6 h-6'/>
                  <BsBoxArrowUpRight className='w-6 h-6'/>
                  <BsBookmark className='w-6 h-6 ml-auto'/>
                </div>
                <div className='flex flex-col'>
                  <p className='text-white font-bold text-sm mt-3'>3,000 likes</p>
                  <div className='flex flex-row gap-2 items-center'>
                    <p className='text-white font-bold text-sm mt-3'>{user.name}</p>
                    <p className='text-white text-sm mt-3'>Aquí van comentarios de la foto</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}

export default Content;
