import * as types from './actionTypes';
import fetch from 'node-fetch';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import toastr from 'toastr';

const api = 'http://leczna.online:8080';

export function newGame(newSize = 4, easyMode, seed, previousId) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return fetch(api + '/api/game/new', {
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
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(newGame => {
                toastr.success('New game loaded!', null, {
                    timeOut: 1500,
                    closeButton: false,
                    preventDuplicates: true
                });
                dispatch(newGameSuccess(newGame));
            })
            .catch(err => {
                toastr.error('Couldn\'t load a new game 😥 \n' + err);
                dispatch(ajaxCallError());
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
        //console.log('winGame() action');
        dispatch(beginAjaxCall());
        return fetch(api + '/api/game/' + game.gameId, {
            method: 'put',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'moves': game.moves,
                'playerName': game.playerName
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(game => {
                toastr.success('Total score: ' + game.score + '</br> Time: ' + Math.trunc(game.time / 1000) + ' s</br> Number of moves: ' + game.moveCount, '😎 Great job!');
                dispatch(winGameSuccess(game));
            })
            .then(game => {
                dispatch(getHighScores(game));
            })
            .catch(err => {
                toastr.error('Request error, your game wasn\'t saved 😥 \n' + err);
                dispatch(ajaxCallError());
                throw (err);
            });
    };
}

export function winGameSuccess(game) {
    //console.log('winGameSuccess() action');
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
        //console.log('getHighScores() action');
        dispatch(beginAjaxCall());
        return fetch(api + '/api/game/highScores', {
            method: 'get'
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(highScores => {
                dispatch(getHighScoresSuccess(highScores));
            })
            .catch(err => {
                toastr.error('Couldn\'t load high scores from the server 😥 \n Most likely Piotr turned off the server. \n' + err);
                dispatch(ajaxCallError());
                throw (err);
            });
    };
}

export function getHighScoresSuccess(highScores) {
    //console.log('getHighScoresSuccess() action');
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

