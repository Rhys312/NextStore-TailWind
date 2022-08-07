import React from 'react';
import Image from 'next/image';
import Thumbnail from '../components/Thumbnail';
import Modal from '../components/Modal';

const Row = ({ movies, onShow }) => {
  return (
    <div className="w-screen my-4 ml-8">
      <div className=" font-bold text-slate-800">Trending Now</div>
      <div className="flex flex-row w-screen h-36 items-center justify-start space-x-0.5 overflow-scroll  ">
        {movies.map((movie) => (
          <Thumbnail
            id={movie.id}
            key={movie.id}
            movie={movie}
            onShow={onShow}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
