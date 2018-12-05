import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe('<Header />', () => {
  test('Header should render as expected', () => {
    const wrapper = shallow(<Header />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})