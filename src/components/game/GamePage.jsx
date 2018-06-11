import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import './game.scss';
import Board from './GameBoard';
import Panel from './GamePanel';

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
            <div className="row">
                <div className="col-sm-7 offset-md-1">
                    <div className="">
                        <Board game={this.props.game} onMoveClick={this.onMoveClick} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <Panel
                        gameId={this.props.game.gameId}
                        leftCount={this.props.game.leftCount}
                        moveCount={this.props.game.moveCount}
                        moves={this.props.game.moves}
                    />
                </div>
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
