import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import MovieCard from "../MovieCard/MovieCard"

const Feed = ({movies}: {movies: Array<IMovie>}) => {
    return <div className="container">{movies.map((movie)=><MovieCard movie={movie} key={movie.imdbID}/>)}</div>
}
export default Feed