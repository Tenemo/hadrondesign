import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars

const Header = () => {
    return (pug`
        .navbar.navbar-expand-sm.navbar-light.bg-light.navbar-nav
            Link(to="/").navbar-brand HD
            NavLink(exact=true to="/").nav-item
                .nav-link Home
            |  | 
            NavLink(to="/about").nav-item
                .nav-link About
            |  | 
            NavLink(to="/game").nav-item
                .nav-link Game
            `
    );
};

export default Header;