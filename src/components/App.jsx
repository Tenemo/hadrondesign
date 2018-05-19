import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Routes from './Routes';

class App extends React.Component {
    render() {
        return pug`
            .container-fluid
                p Header here...
                Routes
                ${ this.props.children }
        `;
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);