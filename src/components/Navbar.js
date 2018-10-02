import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
        <div className="nav-wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">Todo's</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/todos">Todos</NavLink></li>
                </ul>
            </div>
        </div>
        </nav>
    );

}

export default withRouter(Navbar);