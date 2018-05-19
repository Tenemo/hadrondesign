import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (pug`
        .navbar.navbar-expand-sm.navbar-light.bg-light.navbar-nav
            Link(exact to="/").navbar-brand HD
            NavLink(exact to="/").nav-item
                a.nav-link Home
            |  | 
            NavLink(to="/about").nav-item
                a.nav-link About
            |  | 
            NavLink(to="/game").nav-item
                a.nav-link Game
            `
    );
};

export default Header;