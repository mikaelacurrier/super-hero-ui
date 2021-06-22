import React from 'react'
import {shallow} from '../../utils/enzyme';
import ErrorPage from '../errorPage';

describe("Error Page Component",() => {
    it('Does the error page show the correct text', () => {
        const wrapper = shallow(<ErrorPage />)
        expect(wrapper.find(".errorPageDiv").exists()).toBe(true);
        expect(wrapper.text()).toEqual('Oops! That doesn\'t exist!')
    })
} )