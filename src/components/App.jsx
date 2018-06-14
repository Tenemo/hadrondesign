import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './common/Header';
import AboutPage from './about/AboutPage';
import PortfolioPage from './portfolio/PortfolioPage';
import GamePage from './game/GamePage';
import ContactPage from './contact/ContactPage';
import toastr from 'toastr';
toastr.options = {
    closeButton: true,
    closeDuration: 0,
    timeOut: 0,
    extendedTimeOut: 0,
    positionClass: 'toast-top-left'
};

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
    }
    changeTheme = (event) => {
        if (event.target.checked) {
            this.props.actions.changeTheme('theme-dark');
        } else {
            this.props.actions.changeTheme('theme-light');
        }
    }
    render() {
        return (
            <div className={this.props.theme}>
                <Header loading={this.props.loading} changeTheme={this.changeTheme}/>
                <div className="container-fluid main-container">
                    <Switch>
                        <Route exact path="/" component={AboutPage} />
                        <Route path="/portfolio" component={PortfolioPage} />
                        <Route path="/game" component={GamePage} />
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    theme: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        theme: state.app.theme,
        loading: state.ajaxCallsInProgress > 0
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions, dispatch)
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));