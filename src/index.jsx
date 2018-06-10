import 'babel-polyfill';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js';
// import './../node_modules/bootstrap-material-design/scss/_core.scss';
import './styles/global.scss';
import {newGame} from './actions/gameActions';

console.log('NODE_ENV = ' + process.env.NODE_ENV);

const store = configureStore();
store.dispatch(newGame());

render(
    (
        <AppContainer>
            <Root store={store} history={history} />
        </AppContainer>
    ),
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            (
                <AppContainer>
                    <NewRoot store={store} history={history} />
                </AppContainer>
            ),
            document.getElementById('app')
        );
    });
}