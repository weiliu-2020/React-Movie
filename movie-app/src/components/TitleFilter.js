import React from 'react';

class TitleFilter extends React.Component {
    render(){
        return (
            <ul class="filters">
                <li class="filter"><a href="#0">Popular</a></li>
                <li class="filter"><a href="#0">Top Rated</a></li>
                <li class="filter"><a href="#0">Upcoming</a></li>
                <li class="filter"><a href="#0">Now Playing</a></li>
            </ul>
        )
    }
}

export default TitleFilter;