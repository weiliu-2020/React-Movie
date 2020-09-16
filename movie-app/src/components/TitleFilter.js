import React from 'react';

class TitleFilter extends React.Component {
    render(){
        return (
            <ul class="filters">
                <li class="filter">Popular</li>
                <li class="filter">Top Rated</li>
                <li class="filter">Upcoming</li>
                <li class="filter">Now Playing</li>
            </ul>
        )
    }
}

export default TitleFilter;