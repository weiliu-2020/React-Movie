import React, {useEffect, useState} from 'react';
import {URL_POPULAR, URL_TOP_RATED, URL_UPCOMING, URL_NOW_PLAYING, API_KEY} from '../globals/variables';

const TitleFilter = () => {

        return (
            <ul class="filters">
                <li class="filter">Popular</li>
                <li class="filter" onClick={filterTopRated}>Top Rated</li>
                <li class="filter">Upcoming</li>
                <li class="filter">Now Playing</li>
            </ul>
        )
};

export default TitleFilter;