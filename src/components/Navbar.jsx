import React from 'react';
import logo from '../images/netflix.png';

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img
        className='cursor-pointer'
        src={logo}
        alt='Netflix Logo'
        width={170}
        height={170}
      />
      <div>
        <button className='pr-4 text-white'>Sign In</button>
        <button className='bg-[#e50914] px-4 py-2 text-white rounded-sm'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
