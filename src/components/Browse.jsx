import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHook/usePopularMovies';
import useUpcommingMovies from '../CustomHook/useUpcommingMovies';
import useTrandingMovies from '../CustomHook/useTrandingMovies';

const Browse = () => {
//  Fetch data from TMBD Movies API and update the store all login inside Custom Hook

  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTrandingMovies();
  



  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
