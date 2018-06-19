import React from 'react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(
            <AboutPage />
        );
        expect(wrapper).toMatchSnapshot();
    });
});