import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return pug`
            .jumbotron
                h1 Pluralsight Administration
                p React, Redux and React Router in ES6 for ultra-responsive web apps.
                Link(to="about").btn.btn-primary.btn-lg Learn more
    `;
    }
}

export default HomePage;
