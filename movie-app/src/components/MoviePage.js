import React, {useEffect, useState} from 'react';
import {URL_MOVIE, API_KEY} from '../globals/variables';
import {useParams} from 'react-router-dom';

const MoviePage = () => {

    const {movieid}        = useParams();
    const [film, setFilm]  = useState(null);

    useEffect(() => { 
        const fetchFilm = async () => {
            const response = await fetch(URL_MOVIE + movieid + API_KEY)
            let data = await response.json(); 
            setFilm(movieMaker(data));
        }
            fetchFilm();
        }, []);
    
    const movieMaker = (obj) => {
        const filmObj = {
            title: obj.title,
            date: obj.release_date,
            rating: obj.vote_average,
            summary: obj.overview,
            img: obj.poster_path
        }
        return filmObj;
    }

    const filmDiv = (filmObj) => {
        return (
            <div className="movie-page-container">
                <div className="movie-page-poster">
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${filmObj.img}`} alt={`${filmObj.title} poster`} />
                </div>
                <div className="movie-page-info">
                    <h1>{filmObj.title}</h1>
                    <div className="date-rating">
                        <h3>{filmObj.date}</h3>
                        <h3>{filmObj.rating} / 10</h3>
                    </div>
                    <p>{filmObj.summary}</p>  
                </div>
            </div>
        );
    }

    return (
        <main>
            <section>
                {film && filmDiv(film)}
            </section> 
        </main>
    );
}
        
export default MoviePage;