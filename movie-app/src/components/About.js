import React from 'react';
import makeDate from '../utilities/dateMaker';
import TMDBlogo from '../images/TMDBlogo.svg';

class About extends React.Component {
    render() {
        return (
        <main>
            <article>
                <div className="about-container">
                    <div className="about-text">
                    <h2>About</h2>
                        <p>Not sure what to watch at the theatres or on your favourite streaming service? Look no further - Cinemall has it all! We present the trendiest movies of {makeDate()} that have been compiled by film lovers, such as yourself!</p>
                        <p>Please feel free to browse through the selections.If there are any movies that interest you, go ahead and add to your Favourites!</p>
                    </div>
                    <div className="credits">
                        <div className="logo">
                        <img src={TMDBlogo} alt="Movie Database Logo"></img>
                        </div>
                        <p className="education">This product uses the TMDb API but is not endorsed or certified by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"> TMDb. </a>For educational purposes only.</p>
                       
                    </div>
                </div>
            </article>
        </main>
        );
    }
}

export default About;