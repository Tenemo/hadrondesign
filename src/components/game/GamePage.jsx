import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import Board from './Board';
import './game.scss';

export class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    gameRow(game, index) {
        return (
            <div key={index}>
                {game.title}
            </div>);
    }

    render() {
        return (
            <div>
                <h1>Flip&apos;em</h1>
                {this.props.games.map(this.gameRow)}
                <Board />
            </div>
            );
    }
}

GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        games: state.games
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage);
