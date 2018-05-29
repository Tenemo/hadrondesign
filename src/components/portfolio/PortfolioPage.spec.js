import React from 'react';
import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(
            <PortfolioPage />
        );
        expect(wrapper).toMatchSnapshot();
    });
});