import React from 'react';
import { Link } from 'react-router-dom';

class MovieGrid extends React.Component {
    render() {
        return (
        <div class="container">
            <h2><Link to="/moviepage">Movie Poster</Link></h2>
            <p>Movie Title</p>
            <p>Movie Release Date</p>
        </div>
        );
    }
}

export default MovieGrid;