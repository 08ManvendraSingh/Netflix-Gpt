import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {

  if(!movies)return;  

  return (
    <div className='px-6 text-white'>
        <h1 className='text-lg md:text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className="flex">
                {movies.map((x)=><MovieCard key={x.id} posterpath={x.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList