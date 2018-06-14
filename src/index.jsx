import 'babel-polyfill';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/themes.scss';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import {getHighScores} from './actions/gameActions';
import { persistStore } from 'redux-persist';
const store = configureStore();
let persistor = persistStore(store);
store.dispatch(getHighScores());

render(
    (
        <AppContainer>
            <Root store={store} history={history} persistor={persistor} />
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
                    <NewRoot store={store} history={history} persistor={persistor} />
                </AppContainer>
            ),
            document.getElementById('app')
        );
    });
}