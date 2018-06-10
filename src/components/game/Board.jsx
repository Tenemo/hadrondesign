import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

const Board = (game) => {
    return (
        <div className="board">
            {/* {game.board} */}
            {console.log(JSON.stringify(game.board))}
            {game.board.map((row, i) => <Tile key={i} />)} 
            <div className="boardRow">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="boardRow">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
    );
};

Board.propTypes = {
    game: PropTypes.object.isRequired,
};

export default Board;