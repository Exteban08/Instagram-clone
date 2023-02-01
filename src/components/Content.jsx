import React from 'react';

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
    <div className='flex justify-center w-full h-full bg-zinc-900 p-10'>
      <div className='w-full flex flex-col max-w-[600px] gap-20'>
        <div className='flex gap-4'>
          {users.map((user, index) => <img key={index} className='w-12 h-12 rounded-full' src={user.image} />)}
        </div>
        <div className='flex flex-col gap-40'>
          {users.map((user, index) => 
            <div key={index}>
              <div className='flex flex-row gap-2 items-center text-white text-sm'>
                <img className='w-10 h-10 rounded-full' src={user.image} />
                <p className='font-bold'>{user.name}</p>
              </div>
              <img className='w-[600px] mt-2 border border-white' src={user.image} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Content;
