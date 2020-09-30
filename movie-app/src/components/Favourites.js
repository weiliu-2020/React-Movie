import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';
import about1 from '../images/favs2.png';
import {getStorage} from '../utilities/storageMaker';

const Favourites = () => {
    const faveStorageString = getStorage();
    const sampleArray = faveStorageString;

    function removeClick() {
        console.log('Insert code to remove the movie.');
    }

    const faveDivs = () => {
        return sampleArray.map((fave, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${fave.img}`} alt={`${fave.title} poster`} />
                        <div className="overlay">
                            <div className="movie-desc">
                                <div className="ratings"><h3>Rating: {fave.rating}/10</h3></div>
                                <p>{fave.summary}</p>
                                <div className="button-container">
                                    <Link to={`/${fave.id}`}><button className="button more-info">More Info</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title-info">
                        <h2>{fave.title}</h2>
                        <h3>{fave.release_date}</h3>
                    </div>
                </div>      
            ); 
        });
    }

    function YesFaves() {
        return (
            <div className="container">
                {faveDivs()}
            </div>
        )
    }

    function NoFaves() {
        return (
            <div className="text-box">
                <h2>No movies have been added to favourites.</h2>
                <div className="directions-box">
                    <div className="directions-left">
                        <p>To add a movie to your favourites, please hover over any movie with your mouse and click on 'Add to favourites'.</p>
                        <img src={about1} alt="Adding movie to favorites"></img>
                    </div>
                    <div className="directions-right">
                        <p>Alternatively, you could add a movie to your favourites by doing so directly from the description page of any given movie.</p>
                        <img src={about1} alt="Adding movie to favorites"></img>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <main>
            <section>
                {sampleArray && sampleArray.length ? <YesFaves /> : <NoFaves />}
            </section>
        </main>
    )
}

export default Favourites;