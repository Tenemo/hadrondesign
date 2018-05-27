/* eslint no-unused-vars: 0 */
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import GamePage from './game/GamePage';

const Routes = () => (pug`
    Switch
        Route(exact path="/" component=HomePage)
        Route(path="/about" component=AboutPage)
        Route(path="/game" component=GamePage)
`);

export default Routes;