import React from 'react';
import { Link } from 'react-router-dom';

const MovieGrid = (props) => {

    const movieDivs = () => {
        
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        return props.movies.map((movie, i) => {

            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} />
                    <div className="overlay">
                        <div className="movie-desc">
                            <div className="ratings"><h3>{movie.vote_average}/10</h3></div>
                            <p>{movie.overview}</p>
                            <div className="button-container">
                                <Link to={`/${movie.id}`}><button className="button more-info">More Info</button></Link>
                                <button id="favourites" className="button" onClick={handleClick}>Add to Favourites</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="title-info">
                        <h2>{movie.title}</h2>
                        <h3>{movie.release_date}</h3>
                    </div>
                </div>
        )});
    }
    
    return (
        <div className="container">
            {movieDivs(props)}
        </div>
    )
};

export default MovieGrid;