import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttribute } from './utils'


import Sider from '../components/Sider';

const setUp = (props = {}) => {
    const component = shallow(<Sider { ...props } />);
    return component;
}


describe('Sider component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('render without crashing', () => {
        const wrapper = findByTestAttribute(component, 'sider-comp');
        expect(wrapper.length).toBe(1);
    })
})