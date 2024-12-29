import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
//  Fetch data from TMBD Movies API and update the store all login inside Custom Hook

  useNowPlayingMovies();



  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
