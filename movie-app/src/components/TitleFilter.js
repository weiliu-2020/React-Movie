import React from 'react';
import {NavLink} from 'react-router-dom';

class TitleFilter extends React.Component  {
    render() {
        return (
            <ul className="filters">
                <li className="filter"><NavLink to="/popular">Popular</NavLink></li>
                <li className="filter"><NavLink to="/top-rated">Top Rated</NavLink></li>
                <li className="filter"><NavLink to="/upcoming">Upcoming</NavLink></li>
                <li className="filter"><NavLink to="/now-playing">Now Playing</NavLink></li>
            </ul>
        )

    }  
};

export default TitleFilter;