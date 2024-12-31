import React from 'react'
import GptSeachBar from './GptSeachBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BACKGROUD_IMG } from '../utils/Constants'

const GptSearchPage = () => {
  return (
      <div>
            <div className="absolute -z-10">
                <img
                  className=""
                  src={BACKGROUD_IMG}
                  alt="Netflix Logo"
              />
              </div>

          <GptSeachBar />
          <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearchPage
