import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({ poster_path }) => {
  return (
    <div>
      <img className='w-44' src={IMG_CDN_URL + poster_path} alt='poster' />
    </div>
  )
}

export default MovieCard
