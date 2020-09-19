import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';
import makeDate from '../utilities/dateMaker';

const MovieGrid = ({ movie }) => {

    const movieDivs = () => {
        const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return elements.map((index) => {
            return (
                <div className={`movie movie-0${index + 1}`} key={index}>
                    <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div className="ratings"><h3>Rating:80%</h3></div>
                            <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...</p>
                            <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                        </div>
                    </div>
                    </div>
                    <div className="title-info">
                        <h2>Avengers: Endgame</h2>
                        <h3>{makeDate()}</h3>
                    </div>
                </div>
            );
        });
    }
    
    return (
        <div className="container">
            {movieDivs(movie)}
        </div>
    )
};

export default MovieGrid;