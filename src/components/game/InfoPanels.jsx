import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ game }) => {
    return (
        <div className="panel">
            <div className="simpleBox">
                <h5>Current Game</h5>
                <p>
                    Game ID: {game.gameId}
                </p>
                <p>
                    Tiles left to flip: {game.leftCount}
                </p>
                <p>
                    Move count: {game.moveCount}
                </p>
                Moves made:
            <p className="moves">
                    {game.moves.map((move, i) => <React.Fragment key={i}>{!!i && ', '}{move}</React.Fragment>)}
                </p>
            </div>
            <div className="simpleBox">
                <h5>Previous Game</h5>
                {game.previous.score && <p>
                    Score: {game.previous.score}
                </p>}
                {game.previous.size && <p>
                    Size: {game.previous.size}
                </p>}
                {game.previous.moveCount && <p>
                    Move count: {game.previous.moveCount}
                </p>}
                {game.previous.time && <p>
                    Time: {Math.trunc(game.previous.time / 1000)} s
                </p>}
                {game.previous.gameId && <p>
                    Game ID: {game.previous.gameId}
                </p>}
                {game.previous.seed && <p>
                    Seed: {game.previous.seed}
                </p>}
                {game.previous.isSeedCustom && <p>
                    Was seed custom: {JSON.stringify(game.previous.isSeedCustom)}
                </p>}
                {game.previous.easyMode != null && <p>
                    Easy Mode: {JSON.stringify(game.previous.easyMode)}
                </p>}
                {game.previous.playerName && <p>
                    Player name: {game.previous.playerName}
                </p>}
                    Moves made:
                {game.previous.moves && <p className="moves">
                    {game.previous.moves.map((move, i) => <React.Fragment key={i}>{!!i && ', '}{move}</React.Fragment>)}
                </p>}
            </div>
        </div>
    );
};

Panel.propTypes = {
    game: PropTypes.object,
};

export default Panel;