import React from 'react';
import { Link } from 'react-router-dom';

const MovieGrid = (props) => {

    const movieDivs = () => {

        return props.movies.map((movie, i) => {

            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                    <div class="overlay">
                        <div className="movie-desc">
                            <div className="ratings"><h3>{movie.vote_average}/10</h3></div>
                            <p>{movie.overview}</p>
                            <div className="button-container"><Link to={`/movie-page/${i}`}><button className="button">More Info</button></Link></div>
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