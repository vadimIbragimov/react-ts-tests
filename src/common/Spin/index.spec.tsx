import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Spin } from './index';

describe('BlankDiv component', () => {
  it('should slhallow BlankDiv component', () => {
    const component = shallow(<Spin />);
    expect(component).toMatchSnapshot();
  });
  it('should mount BlankDiv component', () => {
    const component = mount(<Spin />);
    expect(component).toMatchSnapshot();
  });
  it('should render BlankDiv component', () => {
    const component = render(<Spin />);
    expect(component).toMatchSnapshot();
  });
});
