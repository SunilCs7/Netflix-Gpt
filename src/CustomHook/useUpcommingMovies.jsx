import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'

const useUpcommingMovies = () => {
  //  Fetch data from TMBD Movies API and update the store
  const dispatch = useDispatch()

  const getuseUpcommingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    )

    const json = await data.json()
    // console.log(json.results);
    dispatch(addUpComingMovies(json.results))
  }

  useEffect(() => {
    getuseUpcommingMovies()
  }, [])
}
export default useUpcommingMovies;
