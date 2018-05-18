import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);