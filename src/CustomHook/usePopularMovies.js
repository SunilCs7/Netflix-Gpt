import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'

const usePopularMovies = () => {
  //  Fetch data from TMBD Movies API and update the store
  const dispatch = useDispatch()

  const getPopularMoviesMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    )

    const json = await data.json()
    // console.log(json.results);
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMoviesMovies()
  }, [])
}
export default usePopularMovies;
