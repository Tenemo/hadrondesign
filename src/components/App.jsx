import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './Routes';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Routes />
            </div>
        );
    }
}

export default hot(module)(App);