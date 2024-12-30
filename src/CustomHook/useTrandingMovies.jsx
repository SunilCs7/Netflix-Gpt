import { useDispatch } from 'react-redux'
import { addTrandingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'

const useTrandingMovies = () => {
  //  Fetch data from TMBD Movies API and update the store
  const dispatch = useDispatch()

  const getTrandingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    )

    const json = await data.json()
    // console.log(json.results);
    dispatch(addTrandingMovies(json.results))
  }

  useEffect(() => {
    getTrandingMovies()
  }, [])
}
export default useTrandingMovies;
