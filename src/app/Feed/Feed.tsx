import { IMovie } from "../../shared/OMDBApi/OMDBApi"
import MovieCard from "../MovieCard/MovieCard"
import "../Feed/Feed.css"
import { Link } from "react-router-dom"

const Feed = ({movies}: {movies: Array<IMovie>}) => {
    return <div className="container feed">{movies.map((movie)=><Link to={"/movie/" + movie.imdbID} id={movie.imdbID}><MovieCard movie={movie} key={movie.imdbID}/></Link>)}</div>
}
export default Feed