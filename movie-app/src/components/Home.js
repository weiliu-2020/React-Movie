import React, {useEffect, useState} from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import TitleFilter from './TitleFilter';
import {URL_POPULAR, API_KEY} from '../globals/variables';

const Home = () => {

    const [movies, setMovies] = useState(null);

    useEffect(() => { 
        const fetchMovie = async () => {
            const popularResponse = await fetch(URL_POPULAR + API_KEY)
            let data = await popularResponse.json(); 
            let filmArray = data.results.slice(0,12);
            setMovies(filmArray) 
            }
            fetchMovie();
        }, []);
        
    return (
        <main>
            <section>
                <SearchBar />
                <TitleFilter movies = {movies} />
                { movies != null && <MovieGrid movies = {movies} />}
            </section>
        </main>
    )
};

export default Home;