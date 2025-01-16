import axios from "axios";

const BASE_URL = import.meta.env.VITE_API;
const OMDBApiInstance = axios.create({baseURL: BASE_URL});
const API_KEY = import.meta.env.VITE_API_KEY;

export interface IMovie{
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

interface ISearchMovieRDO{
    Response: string
    TotalResults: string
    Search: Array<IMovie>
}

const OMDBApi = {
    searchMovie: async(title: string) => {
        const res = await OMDBApiInstance.get<ISearchMovieRDO>("", {
          params: {apikey: API_KEY, s:title}  
        })
        return res.data;
    },
}
export default OMDBApi;