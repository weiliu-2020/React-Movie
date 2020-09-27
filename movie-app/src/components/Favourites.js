import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {

    render() {
        const sampleArray = ['one', 'two', 'three'];

        if (sampleArray && sampleArray.length) {
            return (
                <div className="container">
                <div className="movie movie-01">
                    <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div className="movie-info">
                        <h2>Movie Title #1</h2>
                        <div className="ratings">
                            <h3>Rating:80%</h3>
                            <h3>Jan 1, 1970</h3>
                        </div>
                        <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...</p>
                        <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                    </div>
                </div>
                <div className="movie movie-02">
                    <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div className="movie-info">
                        <h2>Movie Title #1</h2>
                        <div className="ratings">
                            <h3>Rating:80%</h3>
                            <h3>Jan 1, 1970</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                    </div>        
                </div>
                <div className="movie movie-03">
                    <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div className="movie-info">
                        <h2>Movie Title #1</h2>
                        <div className="ratings">
                            <h3>Rating:80%</h3>
                            <h3>Jan 1, 1970</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                    </div>
                </div>
                <div className="movie movie-04">
                    <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div className="movie-info">
                        <h2>Movie Title #1</h2>
                        <div className="ratings">  
                            <h3>Rating:80%</h3>
                            <h3>Jan 1, 1970</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                    </div>
                </div>
                <div className="movie movie-05">
                    <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div className="movie-info">
                        <h2>Movie Title #1</h2>
                        <div className="ratings">  
                            <h3>Rating:80%</h3>
                            <h3>Jan 1, 1970</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
                    </div>
                </div>
            </div>
            );
        } else {
            return (
                <p>No favourites have been added yet</p>
            );
        }
    }
}

export default Favourites;