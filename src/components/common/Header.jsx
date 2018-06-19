import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Header = ({ loading, changeTheme, darkTheme }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm fixed-top">
                <Link to="/" className="navbar-brand">
                    <img src="HD.svg" width="30" height="30" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="headerNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink exact to="/" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink to="/portfolio" className="nav-link">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink to="/game" className="nav-link">
                                Game
                            </NavLink>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="darkModeSwitch">
                        <span><FontAwesomeIcon icon="moon" /></span>
                        <label className="switch">
                            <input type="checkbox" onChange={changeTheme} checked={darkTheme} />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
            </nav>
            {loading && <LoadingDots className="loadingDots fixed-top" interval={100} dots={20} />}
        </React.Fragment>
    );
};

Header.propTypes = {
    loading: PropTypes.bool,
    darkTheme: PropTypes.bool,
    changeTheme: PropTypes.func.isRequired
};

export default Header;