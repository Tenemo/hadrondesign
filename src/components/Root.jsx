import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (pug`
            Provider(store=store)
                ConnectedRouter(history=history)
                    App
        `);
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};