import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import { IMovie } from "../../shared/OMDBApi/OMDBApi";
import "../MovieCard/MovieCard.css";

const useLikesStore = create(persist(
    (set, get) => ({
        movies: {},
        addLike: (imdbID: string) => {
            const movie = get().movies[imdbID] || { likes: 0, liked: false };
            set({ movies: { ...get().movies, [imdbID]: { ...movie, likes: movie.likes + 1, liked: !movie.liked } } });
        },
    }),
    { name: 'likes-storage' } 
));

const storage = createJSONStorage(() => localStorage);

const MovieCard = ({movie}: {movie: IMovie}) => {
    const { movies, addLike } = useLikesStore();
    const { likes, liked } = movies[movie.imdbID] || { likes: 0, liked: false };

    const handleLikeToggle = () => {
        addLike(movie.imdbID);
    };

    return <div className="container">
        <div className="poster" style={{backgroundImage: `url(${movie.Poster})`}}></div>
            <div className="shortdescription">
                <h3>
                    {liked ? (
                        <span className="liked" onClick={handleLikeToggle}>&#10084;</span>
                    ) : (
                        <span className="like" onClick={handleLikeToggle}>&#10084;</span>
                    )}
                    {movie.Title}
                </h3>
                <p>{movie.Type}, {movie.Year}</p>
                <p>ID: {movie.imdbID}</p>
            </div>
    </div>
}
export default MovieCard