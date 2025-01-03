import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useNowPlayingMovies = () => {
      //  Fetch data from TMBD Movies API and update the store
  const dispatch = useDispatch();

  const getNowPlayomgMovies =async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

    
  }

  useEffect(() => {
    getNowPlayomgMovies();
  },[]
  );
}
export default useNowPlayingMovies;

