import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ game }) => {
    return (
        <div className="panel">
            <div className="simpleBox">
                {game.gameId &&
                    <React.Fragment>
                        <h5>Current Game</h5>
                        <p>
                            Game ID: {game.gameId}
                        </p>
                    </React.Fragment>
                }
                {game.leftCount != null && game.leftCount != 0 && <p>
                    Tiles left to flip: {game.leftCount}
                </p>}
                {game.moveCount != null && game.moveCount != 0 && <p>
                    Move count: {game.moveCount}
                </p>}
                {game.moves != null && game.moves.length != 0 && <p className="moves">
                    Moves made: {game.moves.map((move, i) => <React.Fragment key={i}>{!!i && ', '}{move}</React.Fragment>)}
                </p>}
            </div>
            <div className="simpleBox">
                {game.previous.gameId &&
                    <React.Fragment>
                        <h5>Previous Won Game</h5>
                        <p>
                            Game ID: {game.previous.gameId}
                        </p>
                    </React.Fragment>
                }
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
                {game.previous.seed && <p>
                    Seed: {game.previous.seed}
                </p>}
                {game.previous.isSeedCustom != null && <p>
                    Was seed custom: {JSON.stringify(game.previous.isSeedCustom)}
                </p>}
                {game.previous.easyMode != null && <p>
                    Easy Mode: {JSON.stringify(game.previous.easyMode)}
                </p>}
                {game.previous.playerName && <p>
                    Player name: {game.previous.playerName}
                </p>}
                {game.previous.moves != null && game.previous.moves.length !== 0 && <p className="moves">
                    Moves made: {game.previous.moves.map((move, i) => <React.Fragment key={i}>{!!i && ', '}{move}</React.Fragment>)}
                </p>}
            </div>
        </div>
    );
};

Panel.propTypes = {
    game: PropTypes.object,
};

export default Panel;