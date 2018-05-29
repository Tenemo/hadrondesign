import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/gameActions';

export class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    gameRow(game, index) {
        return pug`
        div(key=index)
            = game.title
        `;
    }

    render() {
        return pug`
            div
                h1 Flip 'Em
                = this.props.games.map(this.gameRow)
        `;
    }
}

GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        games: state.games
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage);
