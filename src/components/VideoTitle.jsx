import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
      <p className="py-4 w-2/3 text-lg leading-relaxed text-gray-300">{overview}</p>
      <div className="flex space-x-4 mt-6">
        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-8 text-lg font-semibold rounded-lg transition duration-300 ease-in-out">
          ▶️ Play
        </button>
        <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 text-lg font-semibold rounded-lg transition duration-300 ease-in-out">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
