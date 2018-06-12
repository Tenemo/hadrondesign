import React from 'react';
import Routes from './Routes';
import Header from './common/Header';
import { hot } from 'react-hot-loader';
import toastr from 'toastr';
toastr.options = {
    closeButton: true,
    // showMethod: 'slideDown',
    // hideMethod:'slideUp',
    // closeMethod:'slideUp',
    // showEasing: 'swing',
    // hideEasing: 'linear',
    // closeEasing: 'linear',
    // preventDuplicates: true,
    //closeDuration: 300,
    timeOut: 0,
    extendedTimeOut: 0
};

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