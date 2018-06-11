const defaultSize = 6;
const defaultBoard = [];
for (let i = 0; i < defaultSize; i++) {
    defaultBoard.push([]);
    for (let j = 0; j < defaultSize; j++) {
        defaultBoard[i].push(0);
    }
}
console.log(JSON.stringify(defaultBoard));
export default {
    game: {
        board: defaultBoard,
        size: defaultSize,
        newSize: defaultSize,
        leftCount: undefined,
        playerName: '',
        gameID: null,
        moveCount: 0,
        moves: [],
        seed: '',
        easyMode: false,
        highScores: [],
        isDisabled: true,
        initialBoard: undefined
    }
};
