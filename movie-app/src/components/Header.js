import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
        <header>
            <h1><NavLink to="/">Cinemall</NavLink></h1>
        </header>
        );
    }
}

export default Header;