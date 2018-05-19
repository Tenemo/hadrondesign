import React from 'react';
import HomePage from './HomePage';

describe('HomePage', () => {
    // it('should have an h1 About header', () => {
    // });
    it('matches snapshot', () => {
        const wrapper = shallow(pug`
            HomePage
        `);
        expect(wrapper).toMatchSnapshot();
    });
});