import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import moneyPlane from '../images/about-image-1.png';
import ava from '../images/about-image-2.png';
import {removeFromStorage} from '../utilities/storageMaker';

const Favourites = () => {

    let films       = localStorage.getItem('movie-app-your-favourites');
    const faveArray = JSON.parse(films);

    function faveDivs() {
        return faveArray.map((fave, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${fave.img}`} alt={`${fave.title} poster`} />
                        <div className="overlay">
                            <div className="movie-desc">
                                <div className="ratings"><h3>{fave.rating}/10</h3></div>
                                <p>{fave.summary}</p>
                                <div className="button-container">
                                    <Link to={`/${fave.id}`}><button className="button more-info">More Info</button></Link>
                                    <button id="favourites" className="button">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title-info">
                        <h2>{fave.title}</h2>
                        <h3>{fave.date}</h3>
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
                    {/* <div className="directions-left">
                        <p>To add a movie to your favourites, please hover over any movie with your mouse and click on 'Add to favourites'.</p>
                        <img src={moneyPlane} alt="Adding movie to favorites"></img>
                    </div> */}
                    <p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p>
                    <p> Then click on the 'Add to to Favorites' button as shown in the Image below. </p>
                    <div className="directions-right">
                        
                        <img src={ava} alt="Adding movie to favorites"></img>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <main>
            <section>
                {faveArray && faveArray.length ? <YesFaves /> : <NoFaves />}
            </section>
        </main>
    )
}

export default Favourites;