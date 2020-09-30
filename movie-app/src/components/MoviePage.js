import React, {useEffect, useState} from 'react';
import {URL_MOVIE, API_KEY, STORAGE_YOUR_MOVIES} from '../globals/variables';
import {useParams} from 'react-router-dom';
import {isItemInStorage, getStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';

const MoviePage = () => {
    
    let {movieid} = useParams();
    const [movie, setMovie]  = useState(null);
    const [ifFaved, setIfFaved] = useState();
    
    const addMovie = () => {
        setStorage(movie);
        setIfFaved(true);
    }
    const removeMovie = () => {
        removeFromStorage(movie);
        setIfFaved(false);
    }

    useEffect(() => { 
        const fetchMovie = async () => {
            const response = await fetch(URL_MOVIE + movieid + API_KEY)
            let data = await response.json(); 
            setMovie(movieMaker(data));
        }
            fetchMovie();
        }, []);

    
    const movieMaker = (obj) => {
        const movieObj = {
            title: obj.title,
            date: obj.release_date,
            rating: obj.vote_average,
            summary: obj.overview,
            img: obj.poster_path,
            id: obj.id
        }
        return movieObj;
    }

    const movieDiv = (movieObj) => {
        return (
            <div className="movie-page-container">
                <div className="movie-page-poster">
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${movieObj.img}`} alt={`${movieObj.title} poster`} />
                </div>
                <div className="movie-page-info">
                    <h1>{movieObj.title}</h1>
                    <div className="date-rating">
                        <h3>{movieObj.date}</h3>
                        <h3>{movieObj.rating} / 10</h3>
                    </div>
                    {ifFaved ? <button id="favourites" className="button" onClick={removeMovie}>Remove from Favourites</button> : 
                    <button id="favourites" className="button" onClick={addMovie}>Add to Favourites</button>}
                    <p>{movieObj.summary}</p>  
                    
                </div>
            </div>
        );
    }

    return (
        <main>
            <section>
                {movie && movieDiv(movie)}
            </section> 
        </main>
    );
}
        
export default MoviePage;