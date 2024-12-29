import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTraillerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailler = (movieId) => {
     const disptach = useDispatch();
  // fetch trailer video and updating  store eith trailler video
  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
      API_OPTIONS
    )
    const json = await data.json()
    // console.log(json)

    // finding type trailler from all videos
    const multiTrailler = json.results.filter(video => video.type === 'Trailer')
    const trailler = multiTrailler.length ? multiTrailler[0] : json.results[0]
    // console.log(trailler)
    disptach(addTraillerVideo(trailler))
  }

  useEffect(() => {
    getMovieVideos()
  }, [])
    
}
export default useMoviesTrailler;