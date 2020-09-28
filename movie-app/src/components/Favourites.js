import React from 'react';
import tempImg from '../images/avengers-endgame.jpg';
import { Link } from 'react-router-dom';
import about1 from '../images/favs2.png';
import {getStorage} from '../utilities/storageMaker';

const Favourites = () => {
    const sampleArray = [
        // {   
        //     title: 'Avengers: Endgame',
        //     release_date: '1970-01-01',
        //     vote_average: '8',
        //     overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more...',
        //     img: {tempImg},
        //     id: 24428
        // },
        // {
        //     title: 'Random Movie Title',
        //     release_date: '1999-12-31',
        //     vote_average: '10',
        //     overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     img: {tempImg},
        //     id: 299536
        // },
        // {
        //     title: 'A Movie Title',
        //     release_date: '2000-01-01',
        //     vote_average: '8.3',
        //     overview: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.',
        //     img: {tempImg}
        // },
        // {
        //     title: 'Another Movie',
        //     release_date: '2020-09-27',
        //     vote_average: '7.7',
        //     overview: 'Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.',
        //     img: {tempImg}
        // }
    ];

    function removeClick() {
        console.log('Insert code to remove the movie.');
    }

    const faveDivs = () => {
        return sampleArray.map((fave, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="poster-container">
                        <img className="poster-img" src={tempImg} alt={`${fave.title} poster`} />
                        <div className="overlay">
                            <div className="movie-desc">
                                <div className="ratings"><h3>{fave.vote_average}/10</h3></div>
                                <p>{fave.overview}</p>
                                <div className="button-container">
                                    <Link to={`/${fave.id}`}><button className="button more-info">More Info</button></Link>
                                    <Link to="/favourites"><button id="favourites" className="button" onClick={removeClick}>Remove</button></Link>
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