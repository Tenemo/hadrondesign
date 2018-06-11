import React from 'react';
import PropTypes from 'prop-types';
import Tile from './GameTile';

const Board = ({ game, onMoveClick }) => {
    return (
        <div className="board">
            {game.board.map((row, i) => {
                return (
                    <div className="boardRow" key={i}>
                        {/* type 3 are left coord tiles */}
                        <Tile size={8} coords={[i]} type={3} key={i} />
                        {row.map((column, j) => {
                            return (<Tile onMoveClick={onMoveClick} size={8} coords={[i, j]} type={column} key={j} />);
                        })}
                    </div>
                );
            })}
            <div className="boardRow">
                <Tile size={8} coords={[-1, -1]} type={4} />
                {game.board[0].map((column, k) => {
                    // type 4 are bottom coord tiles
                    return (<Tile size={8} coords={[k]} type={4} key={k} />);
                })}
            </div>
        </div>
    );
};

Board.propTypes = {
    game: PropTypes.object.isRequired,
    onMoveClick: PropTypes.func
};

export default Board;