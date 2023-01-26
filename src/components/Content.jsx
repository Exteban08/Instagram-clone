import React from 'react';

const users = [
  {
    image: 'https://loremflickr.com/cache/resized/7327_16177521727_51e282c5ae_z_640_480_nofilter.jpg',
  },
  {
    image: 'https://loremflickr.com/cache/resized/65535_52307151104_473be6d5aa_c_640_480_nofilter.jpg',
  },
  {
    image: 'https://loremflickr.com/cache/resized/5682_30223694233_c5521d1ce5_h_640_480_nofilter.jpg',
  },
  {
    image: 'https://loremflickr.com/cache/resized/2034_1640846294_dd333858d1_c_640_480_nofilter.jpg',
  },
  {
    image: 'https://loremflickr.com/cache/resized/65535_52332482231_61930e754d_z_640_480_nofilter.jpg',
  },
]

function Content() {
  return (
    <div className='flex justify-center w-full h-full bg-zinc-900 gap-5 p-10'>
      <div className='w-full flex flex-col max-w-[600px] gap-8'>
        <div className='flex gap-4'>
          {users.map(user => <img className='w-12 h-12 rounded-full' src={user.image} />)}
        </div>
        <div className='flex flex-col gap-4'>
          {users.map(user => <img className='w-[600px]' src={user.image} />)}
        </div>
      </div>
    </div>
  )
}

export default Content