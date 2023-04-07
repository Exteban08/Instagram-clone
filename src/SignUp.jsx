import React from 'react';


// const prisma = new PrismaClient();
// console.log("🚀 ~ file: SignUp.jsx:5 ~ prisma:", prisma);

function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValue = document.getElementById("userName").value;
    const emailValue = document.getElementById("userEmail").value;
    const passwordValue = document.getElementById("password").value;
    
    console.log("Input 1 value: " + nameValue);
    console.log("Input 2 value: " + emailValue);
    console.log("Input 3 value: " + passwordValue);
  };
  
  return (
    <section className='flex w-full h-screen items-center justify-center bg-white'>
      <div className='flex flex-col items-center bg-white p-10 drop-shadow-lg'>
        <h1 className='text-3xl font-serif font-bold italic mb-8'>Instagram</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <input
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mb-4'
            id='userName'
            type='text'
            placeholder='Full Name'
            autoComplete="off"
            required
          />
          <input
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mb-4'
            id='userEmail'
            type='email'
            placeholder='E-mail'
            autoComplete="off"
            required
          />
          <input
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mb-4'
            id='password'
            type='password'
            placeholder='Password'
            autoComplete="off"
            required
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded mb-6'>Sign-up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
