import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import User from './User';

describe('<User />', () => {
  test('User component should render as expected', () => {
    const wrapper = shallow(<User />);
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot();
  })

  test('Simulate click event', () => {
    window.alert = jest.fn();
    const wrapper = mount(<User/>);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Hello, User!');

  })
})


// describe('User component should render as expected', () => {
//   describe('<User />', () => {
//     it('renders the component', () => {
//       const component = shallow(<User />);
//       // const component = component.dive();
//       console.log(component);
//       // expect(component.find('h1').hasClass('cover-heading')).toBe(true)
//       // expect(toJson(component)).toMatchSnapshot();
//     })

//     // it('successfully calls the onClick handler', () => {
//     //   const mockOnClick = jest.fn();
//     //   const component = shallow(
//     //     <GatorButton onClick={mockOnClick} label="Eat Food" />
//     //   );
//     //   const component = component.dive();

//     //   component.find('button').simulate('click');

//     //   expect(mockOnClick.mock.calls.length).toEqual(1);
//     })
//   });
// });