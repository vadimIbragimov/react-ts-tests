import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { BlankDiv } from './index';

describe('BlankDiv component', () => {
  it('should slhallow BlankDiv component', () => {
    const component = shallow(<BlankDiv />);
    expect(component).toMatchSnapshot();
  });
  it('should mount BlankDiv component', () => {
    const component = mount(<BlankDiv />);
    expect(component).toMatchSnapshot();
  });
  it('should render BlankDiv component', () => {
    const component = render(<BlankDiv />);
    expect(component).toMatchSnapshot();
  });
  it('should contain text "qwe"', () => {
    const component = shallow(<BlankDiv />);
    expect(component.text()).toEqual('qwe')
  })
});
