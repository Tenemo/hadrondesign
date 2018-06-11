import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import './game.scss';
import Board from './GameBoard';
import NewGamePanel from './NewGamePanel';
import HighScores from './HighScores';
import CurrentPanel from './CurrentPanel';

export class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onMoveClick = this.onMoveClick.bind(this);
        this.onNewGameClick = this.onNewGameClick.bind(this);
        this.updateGameState = this.updateGameState.bind(this);
    }
    onMoveClick = event => {
        //this.props.actions.makeMove(e.target.name);
        Promise.resolve(this.props.actions.makeMove(event.target.getAttribute('coords')))
            .then(() => {
                if (this.props.game.leftCount === 0) {
                    Promise.resolve(this.props.actions.winGame(this.props.game)).
                        then(() => {
                            console.log('isDisabled: ' + this.props.game.isDisabled);
                        });
                }
            });
    }
    onNewGameClick = event => {
        event.preventDefault();
        console.log('isDisabled: ' + this.props.game.isDisabled);
        this.props.actions.getHighScores();
        this.props.actions.newGame(
            this.props.game.newSize,
            this.props.game.easyMode,
            this.props.game.seed,
            this.props.game.gameId
        );
    }
    updateGameState = event => {
        const name = event.target.name;
        let value;
        value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
        this.props.actions.updateOnChange(name, value);
    }

    render() {
        return (
            <React.Fragment>
                isDisabled: {JSON.stringify(this.props.game.isDisabled)}
                <div className="row">
                    <div className="col-sm-7 offset-md-1">
                        <Board game={this.props.game} onMoveClick={this.onMoveClick} />
                    </div>
                    <div className="col-sm-5 col-md-4">
                        <NewGamePanel
                            game={this.props.game}
                            onNewGameClick={this.onNewGameClick}
                            onChange={this.updateGameState}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 col-md-8">
                        <HighScores highScores={this.props.game.highScores} />
                    </div>
                    <div className="col-sm-5 col-md-4">
                        <CurrentPanel
                            gameId={this.props.game.gameId}
                            leftCount={this.props.game.leftCount}
                            moveCount={this.props.game.moveCount}
                            moves={this.props.game.moves}
                        />
                    </div>
                </div>
            </React.Fragment>
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
