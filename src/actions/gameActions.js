import * as types from './actionTypes';
import fetch from 'node-fetch';

export function newGameSuccess(board) {
    return { type: types.NEW_GAME_SUCCESS, board};
}

export function newGame() {
    return function (dispatch) {
        fetch('http://localhost:4000/api/game/new', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                'size': 8,
                'seed': 'fa0661bb07304ef2d008148feee251b9'
            })
        })
            .then(res => res.json())
            .then(board => {
                dispatch(newGameSuccess(board));
                //console.log(board);
            })
            .catch(err => {
                throw(err);
            });
    };
}

// export function winGame(game) {
//     return { type: types.NEW_GAME, game };
// }