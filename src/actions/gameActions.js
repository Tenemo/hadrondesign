import * as types from './actionTypes';
import fetch from 'node-fetch';

//const api = 'http://192.168.0.103:4000';
const api = 'http://leczna.online:8080';

export function newGame(newSize = 4, easyMode, seed, previousId) {
    return dispatch => {
        fetch(api + '/api/game/new', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'size': newSize,
                'easyMode': easyMode,
                'seed': seed,
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

export function updateOnChange(name, value) {
    return {
        type: types.UPDATE_ON_CHANGE,
        name,
        value
    };
}

export function getHighScores() {
    return dispatch => {
        fetch(api + '/api/game/highScores', {
            method: 'get'
        })
            .then(res => res.json())
            .then(highScores => {
                dispatch(getHighScoresSuccess(highScores));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function getHighScoresSuccess(highScores) {
    return {
        type: types.GET_HIGH_SCORES_SUCCESS,
        highScores
    };
}

export function restartBoard() {
    return {
        type: types.RESTART_BOARD
    };
}

