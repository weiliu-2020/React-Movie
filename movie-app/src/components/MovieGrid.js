import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';
import setDate from '../utilities/dateMaker';

class MovieGrid extends React.Component {
    render() {
        return (
        <div class="container">
            <div class="movie movie-01">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Avengers: Endgame</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-02">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, error sapiente asperiores facilis aspernatur autem, labore, beatae distinctio repudiandae ullam adipisci sint voluptatum id sequi fugiat aperiam nobis obcaecati hic officiis! Vel quo dolorem doloribus impedit similique minus optio pariatur laudantium, eius libero ducimus facere praesentium quasi. Natus debitis culpa esse? Repellendus eius dolorem possimus velit optio saepe odio laudantium eligendi voluptatum vitae? Officiis, aliquid fuga numquam assumenda, quaerat earum minus voluptatibus deserunt repellat ex esse autem perspiciatis ducimus. Quas officiis, placeat architecto officia quibusdam ipsa distinctio impedit ut nemo voluptates unde expedita quos itaque amet inventore in porro minima quo perferendis repellat quae ullam earum necessitatibus. Atque, qui quas? Labore optio, inventore numquam molestiae possimus corrupti. Corporis sequi nobis amet! Vel optio facilis, tempore quam nesciunt tenetur! </p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Phineas and Ferb The Movie Candace Against the Universe</h2>
                    <h3>Jan 1, 1970</h3>
                </div>     
            </div>
            <div class="movie movie-03">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-04">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-05">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-06">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-07">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-08">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-09">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-10">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-11">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
            <div class="movie movie-12">
                <div className="poster-container">
                    <Link className="poster-img" to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
                    <div class="overlay">
                        <div className="movie-desc">
                            <div class="ratings">
                                <h3>Rating:80%</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="button-container"><Link to="/moviepage"><button class="button">More Info</button></Link></div>
                        </div>
                    </div>
                </div>
                <div class="title-info">
                    <h2>Movie Title #1</h2>
                    <h3>Jan 1, 1970</h3>
                </div>
            </div>
        </div>
        );
    }
}

export default MovieGrid;