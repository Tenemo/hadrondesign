import React from 'react';
import App from './App';

describe('App', () => {
    // it('should have an h1 About header', () => {
    // });
    it('matches snapshot', () => {
        const wrapper = shallow(pug`
            App
        `);
        expect(wrapper).toMatchSnapshot();
    });
});