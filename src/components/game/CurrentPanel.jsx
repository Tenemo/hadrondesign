import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ gameId, leftCount, moveCount, moves }) => {
    return (
        <div className="panel">
            <div className="simpleBox">
                <h4>Current Game Info</h4>
                <p>
                    Game ID: {gameId}
                </p>
                <p>
                    Tiles left to flip: {leftCount}
                </p>
                <p>
                    Move count: {moveCount}
                </p>
                Moves made:
                <p className="moves">
                    {moves.map((move, i) => <React.Fragment key={i}>{!!i && ', '}{move}</React.Fragment>)}
                </p>
            </div>
        </div>
    );
};

Panel.propTypes = {
    gameId: PropTypes.string,
    leftCount: PropTypes.number,
    moveCount: PropTypes.number,
    moves: PropTypes.array
};

export default Panel;