import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-[#e20813] left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies?.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-[#e20813] right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
