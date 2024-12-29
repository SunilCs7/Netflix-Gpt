import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/Constants'

const Browse = () => {
  const getNowPlayomgMovies =async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    
  }

  useEffect(() => {
    getNowPlayomgMovies();
  },[]
  );


  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
