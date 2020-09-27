import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';

const Favourites = () => {
    const sampleArray = [
        {   
            title: 'Avengers: Endgame',
            date: '1970-01-01',
            rating: '8/10',
            summary: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...',
            img: {tempImg},
            id: 24428
        },
        {
            title: 'Random Movie Title',
            date: '1999-12-31',
            rating: '10/10',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: {tempImg}
        },
        {
            title: 'A Movie Title',
            date: '2000-01-01',
            rating: '0/10',
            summary: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.',
            img: {tempImg}
        }
    ];


    return (
        <div className="container">
        <div className="movie movie-01">
            <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
            <div className="movie-info">
                <h2>{sampleArray[0].title}</h2>
                <div className="ratings">
                    <h3>{sampleArray[0].rating}</h3>
                    <h3>{sampleArray[0].date}</h3>
                </div>
                <p>{sampleArray[0].summary}</p>
                <div className="button-container"><Link to={`/${sampleArray[0].id}`}><button id="more-info" className="button">More Info</button></Link></div>
            </div>
        </div>
        <div className="movie movie-02">
            <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
            <div className="movie-info">
                <h2>{sampleArray[1].title}</h2>
                <div className="ratings">
                    <h3>{sampleArray[1].rating}</h3>
                    <h3>{sampleArray[1].date}</h3>
                </div>
                <p>{sampleArray[1].summary}</p>
                <div className="button-container"><Link to="/moviepage"><button className="button">More Info</button></Link></div>
            </div>        
        </div>
        <div className="movie movie-03">
            <Link to="/moviepage"><img src= {tempImg} alt="Avengers Endgame Poster" /></Link>
            <div className="movie-info">
                <h2>{sampleArray[2].title}</h2>
                <div className="ratings">
                    <h3>{sampleArray[2].rating}</h3>
                    <h3>{sampleArray[2].date}</h3>
                </div>
                <p>{sampleArray[2].summary}</p>
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
    </div>
    ); 
}

export default Favourites;