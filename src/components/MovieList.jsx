import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-full bg-black-to-b from-blak-800 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {/* Horizontal Scrollable Movie List */}
        <div className="flex space-x-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 py-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0">
                <MovieCard poster_path={movie.poster_path} />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-lg">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
