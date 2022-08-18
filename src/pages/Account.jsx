import React from 'react';
import SavedMovies from '../components/SavedMovies';

function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/0b3e8bbd-6d62-472b-b60b-0daea46c422c/BE-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <SavedMovies />
      </div>
    </>
  );
}

export default Account;
