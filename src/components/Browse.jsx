import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'

const Browse = () => {
//  Fetch data from TMBD Movies API and update the store all login inside Custom Hook

  useNowPlayingMovies();



  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
