import React, {useEffect, useState} from 'react';
import {URL_MOVIE, API_KEY, STORAGE_YOUR_MOVIES} from '../globals/variables';
import {useParams} from 'react-router-dom';
import {isItemInStorage, getStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';

const MoviePage = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
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
    const addMovie = () => {
        if (isItemInStorage(film) === true) {
            console.log('It is already in your favourites!');
        } else {
            const yourMovies = setStorage(film, STORAGE_YOUR_MOVIES, false);
            setFilm(yourMovies);
        }
    }
    const removeMovie = () => {
        const yourMovies = removeFromStorage(film.id);
        setFilm(yourMovies);
    }
    
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
                    <button id="favourites" className="button" onClick={handleClick}>Add to Favourites</button>
                    <p>{filmObj.summary}</p>  
                    <p>test</p>
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