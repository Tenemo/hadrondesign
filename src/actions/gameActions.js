import * as types from './actionTypes';
import fetch from 'node-fetch';

const api = 'http://192.168.0.103:4000';

export function newGame(size = 4, easyMode, seed, previousId = null) {
    return dispatch => {
        fetch(api + '/api/game/new', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'size': size,
                'easyMode': easyMode,
                'seed': seed,
                //'seed': 'fa0661bb07304ef2d008148feee251b9',
                'previousId': previousId,
            })
        })
            .then(res => res.json())
            .then(newGame => {
                dispatch(newGameSuccess(newGame));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function newGameSuccess(newGame) {
    return {
        type: types.NEW_GAME_SUCCESS,
        newGame
    };
}

export function makeMove(move) {
    return {
        type: types.MAKE_MOVE,
        move
    };
}

export function winGame(game) {
    return dispatch => {
        fetch(api + '/api/game/' + game.gameId, {
            method: 'put',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'moves': game.moves,
                'playerName': game.playerName
            })
        })
            .then(res => res.json())
            .then(game => {
                dispatch(winGameSuccess(game));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function winGameSuccess(game) {
    return {
        type: types.WIN_GAME_SUCCESS,
        game
    };
}
