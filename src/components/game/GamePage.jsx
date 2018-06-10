import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';
import './game.scss';
import Tile from './Tile';

export class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    gameRow(game, index) {
        return (
            <div key={index}>
                {game.board}
            </div>);
    }

    render() {
        return (
            <div className="board">
                {/* {game.board} */}
                {/* {console.log(JSON.stringify(this.props.game.board[2]))} */}
                {/* {this.props.game.board.map((row, i) => <Tile game={this.props.game.board[i]} key={i} />)} */}

                {/* {this.props.game.board.map((row, i) => {
                    return (<Tile number={"a"} key={i}></Tile>);
                })} */}
                <div className="gameContainer">
                    {this.props.game.board.map((row, i) => {
                        return (
                            <div className="boardRow" key={i}>
                                {row.map((column, j) => {
                                    return (<Tile coords = {[i, j]} type={column} key={j} />);
                                })}
                            </div>
                        );
                    })}
                </div>

                {/* {this.props.game.board.map((row, i) => {
                    return (
                        <div className="boardRow">asdasd</div>
                        {this.props.game.board.map((row, j) => {
                        return (
                            <Tile number={this.props.game.board[i][j]} key={j}></Tile>
                        );
                        })}
                    );
                })} */}
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
