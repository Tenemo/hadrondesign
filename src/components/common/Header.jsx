import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import { connect } from 'react-redux';
import './header.scss';

export class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-dark fixed-top">
                    <Link to="/" className="navbar-brand">
                        <img src="HD.svg" width="30" height="30" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="headerNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="nav-link">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/game" className="nav-link">
                                    Game
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.props.loading && <LoadingDots className="loadingDots fixed-top" interval={100} dots={20} />}
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default withRouter(connect(mapStateToProps)(Header));