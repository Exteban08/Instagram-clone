import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='flex flex-col text-center w-full h-screen bg-black ml-60'>
      <h1 className='text-white'>PROFILE</h1>
      <Link to={'/'} className='text-white hover:text-blue-500'>SIGN-OUT</Link>
    </div>
  );
};

export default Profile;
