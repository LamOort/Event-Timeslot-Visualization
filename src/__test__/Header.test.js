import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttribute } from './utils'


import Header from '../components/Header';

const setUp = (props = {}) => {
    const component = shallow(<Header { ...props } />);
    return component;
}


describe('Header component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('render without crashing', () => {
        const wrapper = findByTestAttribute(component, 'header-comp');
        expect(wrapper.length).toBe(1);
    })
})