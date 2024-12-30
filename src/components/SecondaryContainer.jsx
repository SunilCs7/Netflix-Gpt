import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies); 
  return (
    <div className='bg-black'>
      <div className='-mt-48 relative z-10'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Tranding"} movies={movies.TrandingMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMoviesMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpComingMovies} />
      <MovieList title={"Latest"} movies={movies.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
