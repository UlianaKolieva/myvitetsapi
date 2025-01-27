import { Link } from 'react-router-dom';
import "../Main/Main.css"
import Input from '../../app/Input/Input';
import Button from '../../app/Button/Button';
import { useEffect, useState } from 'react';
import OMDBApi, { IMovie } from '../../shared/OMDBApi/OMDBApi';
import Feed from '../../app/Feed/Feed';
export default function Main() {
    
    const [searchValue, setValue] = useState("");
    const [searchRes, setSearchRes] = useState<IMovie[]>([]);

    const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchRes((await OMDBApi.searchMovie(searchValue)).Search)
    }

    useEffect(() => {
        console.log(searchRes);
        
    }, [searchRes])

    return(
        <>
            <div className='header'><h2>MyMovies</h2><Link className="headerlink" to="/liked">See liked &rarr;</Link></div>
            <form onSubmit={(e) => handleSearch(e)}>
                <Input value={searchValue} setValue={setValue}/><Button />
            </form>
            <Feed movies={searchRes}/>
            <div id="searchResults"></div>
        </>
    )
}
