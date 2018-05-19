import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Routes from './Routes';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return pug`
            .container-fluid
                Header
                Routes
                ${ this.props.children }
        `;
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);