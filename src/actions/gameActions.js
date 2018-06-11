import * as types from './actionTypes';
import fetch from 'node-fetch';

const api = 'http://192.168.0.103:4000';

export function newGame() {
    return dispatch => {
        fetch(api + '/api/game/new', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'size': 8,
                //'easyMode': true,
                'seed': 'fa0661bb07304ef2d008148feee251b9'
            })
        })
            .then(res => res.json())
            .then(game => {
                dispatch(newGameSuccess(game));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function newGameSuccess(game) {
    return { type: types.NEW_GAME_SUCCESS, game };
}

export function makeMove(move) {
    return {
        type: types.MAKE_MOVE,
        move
    };
}

export function winGame(game) {
    return dispatch => {
        fetch(api + '/api/game/' + game.gameID, {
            method: 'put',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'moves': ['A6','H1','G3','D8','A2','D1','C3','D5','F7','G7','G6','F6'],
                'playerName': game.playerName
            })
        })
            .then(res => res.json())
            .then(game => {
                dispatch(newGameSuccess(game));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function winGameSuccess(game) {
    return { type: types.WIN_GAME_SUCCESS, game };
}
