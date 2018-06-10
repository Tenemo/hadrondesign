import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import './game.scss';
import Board from './GameBoard';

export class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onMoveClick = this.onMoveClick.bind(this);
    }
    onMoveClick = event => {
        //this.props.actions.makeMove(e.target.name);
        this.props.actions.makeMove(event.target.getAttribute('coords'));
    }
    render() {
        return (
            <div className="col-8">
            gameId: {this.props.game.gameId}
            <br />
            left: {this.props.game.leftCount}
            <br />
            move count: {this.props.game.moveCount}
            <br />
            current moves: {JSON.stringify(this.props.game.moves)}
            <br />
            <Board game={this.props.game} onMoveClick={this.onMoveClick} />
            {/* {console.log(this.onMoveClick)} */}
            </div>
        );
    }
}

GamePage.propTypes = {
    game: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        game: state.game
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
