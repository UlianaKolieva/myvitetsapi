import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import MovieCard from "../MovieCard/MovieCard"
import "../Feed/Feed.css"

const Feed = ({movies}: {movies: Array<IMovie>}) => {
    return <div className="container feed">{movies.map((movie)=><MovieCard movie={movie} key={movie.imdbID}/>)}</div>
}
export default Feed