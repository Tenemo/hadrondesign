/* eslint no-unused-vars: 0 */
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

const Routes = () => (pug`
    Switch
        Route(exact path="/" component=${HomePage})
        Route(path="/about" component=${AboutPage})
`);

export default Routes;