//import { PropsWithChildren } from "react";
import { IMovie } from "../../shared/OMDBApi/OMDBApi";
//interface IMovieCard extends PropsWithChildren{}

const MovieCard = ({movie}: {movie: IMovie}) => {
    return <div className="container">{movie.Title}</div>
}
export default MovieCard