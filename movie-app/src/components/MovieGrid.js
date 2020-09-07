import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';

class MovieGrid extends React.Component {
    render() {
        return (
        <div class="container">
            <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
            <p>Movie Title</p>
            <p>Jan 1, 1970</p>
        </div>
        );
    }
}

export default MovieGrid;