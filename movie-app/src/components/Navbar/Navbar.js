import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { NavLink } from "react-router-dom"



class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <header>
            <h1 className="navbar-logo"><NavLink to="/">Cinemall</NavLink></h1>
            <nav className="NavbarItems">
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <NavLink className={item.cName} to={item.url} >
                           {item.title} 
                        </NavLink>
                        </li>
                    )
                })}
                
            </ul>
            
            </nav>
            </header>
        )
    }
}

export default Navbar;