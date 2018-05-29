import * as types from './actionTypes';

export function newGame(game) {
    return { type: types.NEW_GAME, game};
}