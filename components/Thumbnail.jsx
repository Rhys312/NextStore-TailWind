import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { baseUrl } from '../constants/constants';
import ThumbnailContext from '../store/ThumbnailProvider';
import InfoContext from '../store/InfoProvider';

const Thumbnail = ({ movie }) => {
  const thumbnailCtx = useContext(ThumbnailContext);
  const infoCtx = useContext(InfoContext);

  async function getMovieFromThumbnail() {
    const data = await fetch(
      `https://api.themoviedb.org/3/${
        movie?.media_type === 'tv' ? 'tv' : 'movie'
      }/${movie?.id}?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));

    thumbnailCtx.title = data?.original_title
      ? data.original_title
      : data.original_name;
    thumbnailCtx.id = data.id;

    if (data?.videos) {
      const index = data?.videos.results.findIndex(
        (element) => element.type === 'Trailer'
      );
      const trailer = data.videos?.results[index]?.key;
      thumbnailCtx.trailer = trailer;
    }

    infoCtx.handleState(true);
  }

  return (
    <div
      onClick={() => {
        getMovieFromThumbnail();
      }}
      className=" cursor-pointer hover:z-[500] relative flex h-28 min-w-[180px] hover:scale-125 hover:overflow-visible object-cover transition-all duration-200 hover:shadow-xl "
    >
      <Image
        alt=""
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
