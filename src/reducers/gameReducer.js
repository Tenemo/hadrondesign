import * as types from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

export default function gameReducer(state = initialState.game, action) {
    switch (action.type) {
        case types.NEW_GAME_SUCCESS:
            return objectAssign({}, state, {board: action.board});
        default:
            return state;
    }
}