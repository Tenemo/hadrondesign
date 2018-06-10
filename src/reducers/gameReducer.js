import * as types from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';
import { updateBoard } from '../helpers/helpers';

export default function gameReducer(state = initialState.game, action) {
    let newState;
    switch (action.type) {
        case types.NEW_GAME_SUCCESS:
            newState = objectAssign({}, state);
            newState.board = action.game.board;
            newState.gameId = action.game.gameId;
            newState.leftCount = 0;
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
            // if .push is used EVEN on newState, we get "A state mutation was detected inside a dispatch", googled for a couple of hours, still have no clue why is that, might be a legitimate bug
            newState.moves = newState.moves.concat(action.move);
            newState.moveCount++;
            newState = updateBoard(newState, action.move);
            return newState;
        default:
            return state;
    }
}