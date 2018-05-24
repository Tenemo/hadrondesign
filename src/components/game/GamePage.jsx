import React from 'react';
class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            game: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const game = this.state.game;
        game.title = event.target.value;
        this.setState({game: game });
    }

    onClickSave() {
        console.log(`Saving ${this.state.game.title}`);
    }

    render() {
        return pug`
            div
                h1 Flip 'Em
                h2 New Game
                input(
                    type='text'
                    onChange=this.onTitleChange
                    value=this.state.game.title
                )
                input(
                    type='submit'
                    value='Save'
                    onClick=this.onClickSave
                )
        `;
    }
}

export default GamePage;
