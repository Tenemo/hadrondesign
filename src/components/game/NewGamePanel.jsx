import React from 'react';
import PropTypes from 'prop-types';
import gameClientConfig from '../../../config/gameClientConfig';

const NewGamePanel = ({ game, onNewGameClick, onChange }) => {
    let selectOptions = [];
    for (let i = gameClientConfig.minSize; i < gameClientConfig.maxSize + 1; i++) {
        selectOptions.push(
            <option key={i} value={i}>{i}{i == 8 && ' - suggested'}</option>
        );
    }
    return (
        <div className="panel">
            <form className="simpleBox">
                <h4>New game</h4>
                <div className="form-group">
                    <label htmlFor="newSize">Board size: </label>
                    <select onChange={onChange} value={game.newSize} className="form-control" name="newSize">
                        {selectOptions}
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input onChange={onChange} value={game.easyMode} type="checkbox" className="form-check-input" name="easyMode" />
                        <label htmlFor="easyMode" className="form-check-label">Easy Mode - disables score</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="seed">Optional seed for board generation, disables score:</label>
                    <input onChange={onChange} value={game.seed} type="text" className="form-control" name="seed" placeholder="myBoardToShareWithFriends" />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" value="New Game" onClick={onNewGameClick} />
                </div>
            </form>
        </div>
    );
};

NewGamePanel.propTypes = {
    game: PropTypes.object,
    onNewGameClick: PropTypes.func,
    onChange: PropTypes.func
};

export default NewGamePanel;