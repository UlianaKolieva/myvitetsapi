import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import { useMovieStore } from "../../entities/MovieStore/Movie.store";
import Feed from "../../app/Feed/Feed";
import "./LikedMovies.css";

export default function LikedMovies(){
    const { movies, addLike } = useMovieStore((store)=>store);
    console.log(movies);
    
    return <div className="likedcontainer"><h2>Liked movies</h2><Feed movies={movies}/></div>
}
