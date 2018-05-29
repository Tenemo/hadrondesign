import React from 'react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    // it('should have an h1 About header', () => {
    // });
    it('matches snapshot', () => {
        const wrapper = shallow(
            <AboutPage />
        );
        expect(wrapper).toMatchSnapshot();
    });
});