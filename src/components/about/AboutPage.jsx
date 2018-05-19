import React from 'react';
class AboutPage extends React.Component {
    render() {
        return pug`
            div
                h1 About
                p This application uses React, Redux, React Router and a variety of other helpful libraries.
        `;
    }
}

export default AboutPage;
