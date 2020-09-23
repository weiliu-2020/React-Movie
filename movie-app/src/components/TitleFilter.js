import React from 'react';
import {NavLink} from 'react-router-dom';

class TitleFilter extends React.Component  {
    render() {
        return (
            <ul class="filters">
                <li class="filter"><NavLink to="/popular">Popular</NavLink></li>
                <li class="filter"><NavLink to="/top-rated">Top Rated</NavLink></li>
                <li class="filter"><NavLink to="/upcoming">Upcoming</NavLink></li>
                <li class="filter"><NavLink to="/now-playing">Now Playing</NavLink></li>
            </ul>
        )

    }  
};

export default TitleFilter;