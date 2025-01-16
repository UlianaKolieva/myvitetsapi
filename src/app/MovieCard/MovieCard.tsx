//import { PropsWithChildren } from "react";
import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import "../MovieCard/MovieCard.css";
//interface IMovieCard extends PropsWithChildren{}

const MovieCard = ({movie}: {movie: IMovie}) => {
    return <div className="container">
        <div className="poster" style={{backgroundImage: `url(${movie.Poster})`}}></div>
            <div>
                <p>{movie.Title}</p>
                <p>{movie.Type}, {movie.Year}</p>
                <p>{movie.imdbID}</p>
            </div>
    </div>
}
export default MovieCard