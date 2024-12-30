import React from 'react';
import { useSelector } from 'react-redux';
import useMoviesTrailler from '../CustomHook/useMoviesTrailler';

const VideoBackground = ({ movieId }) => {
    // Fetch the trailer video data from the Redux store

  const traillerVideo = useSelector((store) => store.movies.traillerVideo);

  useMoviesTrailler(movieId);

  return (
    <div className='w-screen '>
      <iframe
       className='w-screen aspect-video '
        src={`https://www.youtube.com/embed/${traillerVideo?.key +"?&autoplay=1&mute=1"}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

