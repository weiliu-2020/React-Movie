import React from 'react';

class Nav extends React.Component {
    render() {
        return (
        <nav>
            <ul>
                {/* Insert the <NavLink to=""></NavLink> later */}
                <li>Home</li>
                <li>About</li>
                <li>Favourites</li>
                <li>Watchlist</li>
            </ul>
        </nav>
        );
    }
}

export default Nav;