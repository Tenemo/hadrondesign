import 'babel-polyfill';
import { render } from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
//import routes from './routes';
//import 'popper.js';
import './../node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js';
import './../node_modules/bootstrap-material-design/scss/_core.scss';
import './styles/styles.scss';

import App from './components/App'; //bugfixing
import { Route, IndexRoute, Link } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

// import './../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

console.log('NODE_ENV = ' + process.env.NODE_ENV);
console.log('index.js represent');

// render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
// );

render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">App</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/about" component={AboutPage} />
            <Route path="/home" component={HomePage} />
        </div>
    </Router>,
    document.getElementById('app')
);


if (module.hot) {
    module.hot.accept();
}