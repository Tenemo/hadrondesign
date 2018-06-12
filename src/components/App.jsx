import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './Routes';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid main-container">
                    <Routes />
                </div>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);