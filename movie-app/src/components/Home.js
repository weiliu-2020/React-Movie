import React, {useEffect} from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import TitleFilter from './TitleFilter';

const Home = () => {

        useEffect(() => { 
            const fetchMovie = async () => {
                const popularResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7af11c237343537994a3841aef8f4eef&language=en-US&page=1')
                let data = await popularResponse.json();
                console.log (data);
                }
                fetchMovie();
         }, []);

        return (
        <main>
            <section>
                <SearchBar />
                <TitleFilter />
                <MovieGrid />
            </section>
        </main>
        )
    };

export default Home;