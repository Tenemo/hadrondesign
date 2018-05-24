import 'babel-polyfill';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './../node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js';
import './../node_modules/bootstrap-material-design/scss/_core.scss';
import './styles/styles.scss';

console.log('NODE_ENV = ' + process.env.NODE_ENV);

render((pug`
    BrowserRouter
        App
    `),
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}