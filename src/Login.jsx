import React, { useEffect, useRef, useState } from 'react';

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
    setUser('');
    setPassword('');
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, password]);
  
  return (
    <section className='flex w-full h-screen items-center justify-center bg-white'>
      <div className='flex flex-col items-center bg-white p-10 drop-shadow-lg'>
        <p ref={errRef} className={errMsg ? "errMsg" :
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className='text-3xl font-serif font-bold italic mb-8'>Instagram</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <input
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 mb-4'
            type="text"
            id="username"
            placeholder="Username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <input
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500'
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          /><br />

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded mb-6'>Sign-in</button>
        </form>
        <div className='w-full text-xs text-gray-400'>
          <p>Need an Account?<br />
            <span className='line'>
              <a href='#'>Sign-up</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
