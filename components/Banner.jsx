import React, { useState, useEffect } from 'react';
import { baseUrl } from '../constants/constants';
import Image from 'next/image';

const Banner = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const ranNum = Math.floor(Math.random() * netflixOriginals.length);
    setMovie(netflixOriginals[ranNum]);
  }, [netflixOriginals]);

  return (
    <div className="relative -z-10 w-screen h-[85vh] flex overflow-hidden object-cover">
      <Image
        layout="fill"
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
