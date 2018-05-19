import React from 'react';
import Header from './Header';

describe('App', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(pug`
            Header
        `);
        expect(wrapper).toMatchSnapshot();
    });
});