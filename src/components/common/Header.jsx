import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars

const Header = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light navbar-nav">
            <Link to="/" className="navbar-brand">HD</Link>
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
        </div>
    );
};

export default Header;