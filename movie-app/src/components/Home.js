import React, {useEffect} from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import TitleFilter from './TitleFilter';
import {URL_POPULAR, API_KEY} from '../globals/variables';

const Home = () => {
   
   const title            = 'Avengers Endgame';
   const rating           = 'Rating: 80%';
   let randomArray        = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
   const firstTwelveFilms = randomArray.slice(0,12); 

    useEffect(() => { 
        const fetchMovie = async () => {
            const popularResponse = await fetch(URL_POPULAR + API_KEY)
            let data = await popularResponse.json(); 
            console.log(data);
            let filmArray = data.results;
                for (let key in filmArray) {
                    if (filmArray.hasOwnProperty(key)) {
                        console.log(filmArray[key].title);
                        console.log(filmArray[key].vote_average);
                    }
                }
            }
            fetchMovie();
        }, []);
        
    return (
        <main>
            <section>
                <SearchBar />
                <TitleFilter />
                <MovieGrid title={title} rating={rating} anArray={firstTwelveFilms}/>
            </section>
        </main>
    )
};

export default Home;