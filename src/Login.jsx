import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  console.log('user', user);
  console.log('password', password);
  return (
    <section className='flex justify-center w-full h-screen bg-white'>
      <h1 className='text-black'>SIGN-IN</h1>
      <form>
        <label htmlFor='username'>Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button>Sign-in</button>
      </form>
    </section>
  );
};

export default Login;
