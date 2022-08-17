import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-[#e50914] text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='pr-4 text-white'>Account</button>
          </Link>

          <button
            onClick={handleSignOut}
            className='bg-[#e50914] px-4 py-2 text-white rounded-sm'
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link to='/signin'>
            <button className='pr-4 text-white'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-[#e50914] px-4 py-2 text-white rounded-sm'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
