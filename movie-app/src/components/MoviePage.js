import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
//import { Link } from 'react-router-dom';

class MoviePage extends React.Component {
    render() {
        return (
        <main>
            <section>
                <div class="movie-page-container">
                    <div class="movie-page-poster">
                        <img src= {tempImg} alt="Avengers Endgame Poster" />
                    </div>
                    <div class="movie-page-info">
                        <h1>Avengers: Endgame</h1>
                        <div class="date-rating">
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
}

export default MoviePage;