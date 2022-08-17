import React from 'react';

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-[#e50914] text-4xl font-bold cursor-pointer'>
        NETFLIX
      </h1>
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
