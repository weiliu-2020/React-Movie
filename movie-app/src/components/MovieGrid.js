import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import makeDate from '../utilities/dateMaker';
import { Link } from 'react-router-dom';
import setDate from '../utilities/dateMaker';

const MovieGrid = (props) => {

    const movieDivs = () => {

        return props.movies.map((movie, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div className="ratings"><h3>{movie.vote_average}</h3></div>
                            <p>{movie.overview}</p>
                            <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                        </div>
                    </div>
                    </div>
                    <div className="title-info">
                        <h2>{movie.title}</h2>
                        <h3>{movie.release_date}</h3>
                    </div>
                </div>
            );
        });
    }
    
    return (
        <div className="container">
            {movieDivs(props)}
        </div>
    )
};

export default MovieGrid;