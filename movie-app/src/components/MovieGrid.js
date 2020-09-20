import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import makeDate from '../utilities/dateMaker';
import { Link } from 'react-router-dom';

const MovieGrid = (props) => {

    const movieDivs = () => {

        return props.anArray.map((index) => {
            return (
                <div className={`movie movie-0${index}`} key={index}>
                    <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div className="ratings"><h3>{props.rating}</h3></div>
                            <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...</p>
                            <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                        </div>
                    </div>
                    </div>
                    <div className="title-info">
                        <h2>{props.title}</h2>
                        <h3>{makeDate()}</h3>
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