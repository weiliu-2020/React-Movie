import React from 'react';
import {URL_POPULAR} from '../globals/variables';
import MainSection from './MainSection';
import {getStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';

const Home = () => {

    return (
        <MainSection sort={URL_POPULAR} />
    )
};

export default Home;