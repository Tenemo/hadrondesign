import React from 'react';
import PropTypes from 'prop-types';

const HighScores = ({ highScores }) => {
    return (
        <div className="highScores">
            <h4>High Scores:</h4>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Score</th>
                        <th>Player name</th>
                        <th>Board size</th>
                        <th>Moves</th>
                        <th>Time[s]</th>
                    </tr>
                </thead>
                <tbody>
                {highScores.map((score, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{score.game_score}</td>
                            <td>{score.game_player_name}</td>
                            <td>{score.game_size}</td>
                            <td>{score.game_move_count}</td>
                            <td>{Math.trunc(score.game_time / 1000)}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

HighScores.propTypes = {
    highScores: PropTypes.array
};

export default HighScores;