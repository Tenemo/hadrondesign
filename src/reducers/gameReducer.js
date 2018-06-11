import * as types from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';
import { updateBoard } from '../helpers/helpers';

export default function gameReducer(state = initialState.game, action) {
    let newState;
    switch (action.type) {
        case types.NEW_GAME_SUCCESS:
            newState = objectAssign({}, state);
            newState.isDisabled = false;
            newState.board = action.newGame.board;
            newState.gameId = action.newGame.gameId;
            newState.size = action.newGame.size;
            newState.leftCount = 0;
            newState.moves = [];
            newState.moveCount = 0;
            //console.log(newState.board[0]);
            for (let i = 0; i < newState.board.length; ++i) {
                for (let j = 0; j < newState.board[i].length; ++j) {
                    if (newState.board[i][j] == 1)
                        newState.leftCount++;
                }
            }
            return newState;
        case types.MAKE_MOVE:
            newState = objectAssign({}, state);
            // if .push is used EVEN on newState, I get "A state mutation was detected inside a dispatch",
            // googled for a couple of hours, still have no clue why is that
            newState.moves = newState.moves.concat(action.move);
            newState.moveCount++;
            newState = updateBoard(newState, action.move);
            return newState;
        case types.WIN_GAME_SUCCESS:
            newState = objectAssign({}, state);
            newState.isDisabled = true;
            return newState;
        case types.UPDATE_ON_CHANGE:
            newState = objectAssign({}, state);
            newState[action.name] = action.value;
            return newState;
        case types.GET_HIGH_SCORES_SUCCESS:
            newState = objectAssign({}, state);
            newState.highScores = action.highScores;
            return newState;
        default:
            return state;
    }
}