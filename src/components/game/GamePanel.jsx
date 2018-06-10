import React from 'react';
import PropTypes from 'prop-types';
import gameClientConfig from '../../../config/gameClientConfig';

const Panel = ({ gameId, leftCount, moveCount, moves }) => {
    return (
        <div className="panel">
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
            <form>
                <div className="form-group">
                    <label htmlFor="boardSizeSelect">Board size:</label>
                    <select className="form-control" id="boardSizeSelect">
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="easyModeCheckbox" />
                    <label className="form-check-label" htmlFor="easyModeCheckbox">Easy Mode</label>
                </div>
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