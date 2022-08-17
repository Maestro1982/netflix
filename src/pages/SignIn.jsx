import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/0b3e8bbd-6d62-472b-b60b-0daea46c422c/BE-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='w-full fixed px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-2xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-[#333333] rounded'
                  type='email'
                  placeholder='E-mailaddress'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-[#333333] rounded'
                  type='password'
                  placeholder='Password'
                />
                <button className='bg-[#e50914] py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-[#92a4ac]'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-20'>
                  <span className='text-[#5a666c]'>
                    Is Netflix new for you?
                  </span>{' '}
                  <Link to='/signup' className='hover:underline'>
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
