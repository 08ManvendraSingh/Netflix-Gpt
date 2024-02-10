import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

  const movies=useSelector(store=>store.movies);
  return (
    <div className=" bg-black">
      <div className="relative z-20 mt-0 md:-mt-52 pl-2 md:pl-12">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;