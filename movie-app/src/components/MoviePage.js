import React from 'react';
import {useParams} from 'react-router-dom';
import tempImg from '../images/avengers-endgame.jpg';

const MoviePage = () => {

    const {movieid} = useParams();
    console.log(movieid);

        return (
            <main>
                <section>
                    <div className="movie-page-container">
                        <div className="movie-page-poster">
                            <img src= {tempImg} alt="Avengers Endgame Poster" />
                        </div>
                        <div className="movie-page-info">
                            <h1>Avengers: Endgame</h1>
                            <div className="date-rating">
                                <h3>Jan 1, 1970</h3>
                                <h3>Rating: 80%</h3>
                            </div>
                            <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                        </div>
                    </div>
                </section> 
            </main>
            );
        }
        
export default MoviePage;