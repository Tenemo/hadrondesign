import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark fixed-top">
            <Link to="/" className="navbar-brand">
                    <img src="HD.svg" width="30" height="30"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavba" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="headerNavbar">
                <ul className="navbar-nav mr-auto">
                    <NavLink exact to="/" className="nav-item">
                        <div className="nav-link">About</div>
                    </NavLink>
                    <NavLink to="/portfolio" className="nav-item">
                        <div className="nav-link">Portfolio</div>
                    </NavLink>
                    <NavLink to="/game" className="nav-item">
                        <div className="nav-link">Game</div>
                    </NavLink>
                    <NavLink to="/contact" className="nav-item">
                        <div className="nav-link">Contact</div>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Header;