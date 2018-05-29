import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import PortfolioPage from './portfolio/PortfolioPage';
import GamePage from './game/GamePage';
import ContactPage from './contact/ContactPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/contact" component={ContactPage} />
    </Switch>
);

export default Routes;