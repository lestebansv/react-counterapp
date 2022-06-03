import React from "react";
import CounterApp from "../CounterApp";

import { shallow } from "enzyme";

describe('Prueda en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        const numValue = wrapper.find('h2').text().trim();
        expect(parseInt(numValue)).toBe(value);

    });

    test('debe de incrementar con el boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const numValue = wrapper.find('h2').text().trim();
        expect(numValue).toBe('11');

    });

    test('debe de disminuir con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const numValue = wrapper.find('h2').text().trim();
        expect(numValue).toBe('9');

    });

    test('debe de establecer el valor por defecto con el btn "reset"', () => {

        const value = 105;
        const wrapper = shallow(<CounterApp value={value} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const numValue = wrapper.find('h2').text().trim();

        expect(parseInt(numValue)).toBe(value);

    });

})