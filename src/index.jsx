import 'babel-polyfill';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import './../node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js';
import './../node_modules/bootstrap-material-design/scss/_core.scss';
import './styles/styles.scss';
require('./favicon.ico');

console.log('NODE_ENV = ' + process.env.NODE_ENV);

const store = configureStore();

render(
    (pug`
        AppContainer
            Root(store=store history=history)
    `),
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            (pug`
                AppContainer
                    NewRoot(store=store history=history)
            `),
            document.getElementById('app')
        );
    });
}