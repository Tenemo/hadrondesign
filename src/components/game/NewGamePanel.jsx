import React from 'react';
import PropTypes from 'prop-types';
import gameClientConfig from '../../../config/gameClientConfig';

const NewGamePanel = ({ onNewGameClick, onChange }) => {
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
                    <label htmlFor="boardSizeSelect">Board size:</label>
                    <select className="form-control" id="boardSizeSelect">
                        {selectOptions}
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="easyModeCheckbox" />
                        <label className="form-check-label">Easy Mode - disables score</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">(optional, disables score) Custom seed for board generation:</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="myBoardToShareWithOthers" />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" value="New Game" onClick={onNewGameClick} />
                </div>
            </form>
        </div>
    );
};

NewGamePanel.propTypes = {
    onNewGameClick: PropTypes.func
};

export default NewGamePanel;