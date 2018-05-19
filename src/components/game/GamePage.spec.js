import React from 'react';
import GamePage from './GamePage';

describe('App', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(pug`
            GamePage
        `);
        expect(wrapper).toMatchSnapshot();
    });
});