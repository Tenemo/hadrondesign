import React from 'react';
import PropTypes from 'prop-types';
import gameClientConfig from '../../../config/gameClientConfig';

const Panel = ({ gameId, leftCount, moveCount, moves }) => {
    let selectOptions = [];
    for (let i = gameClientConfig.minSize; i < gameClientConfig.maxSize + 1; i++) {
        selectOptions.push(
            <option key={i} value={i}>{i}</option>
        );
    }
    return (
        <div className="panel">
            <div className="stats">
                Game ID (for debugging): {gameId}
                <br />
                <br />
                Tiles left to flip: {leftCount}
                <br />
                <br />
                Move count: {moveCount}
                <br />
                <br />
                Moves made: {JSON.stringify(moves)}
                <br />
                <br />
            </div>
            <form className="newGameForm">
                <div className="form-group">
                    <label htmlFor="boardSizeSelect">Board size:</label>
                    <select className="form-control" id="boardSizeSelect">
                        {selectOptions}
                    </select>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="easyModeCheckbox" />
                    <label className="form-check-label" htmlFor="easyModeCheckbox">Easy Mode</label>
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value="New Game" />
            </form>
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