import 'babel-polyfill';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
//import './styles/bootstrapOverride.scss';
//import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/global.scss';
import {getHighScores} from './actions/gameActions';

const store = configureStore();
store.dispatch(getHighScores());

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