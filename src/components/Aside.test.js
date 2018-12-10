import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';

import Aside from './Aside';

describe ('<Aside />', () => {
  const lists = {"listName": "Kitty Stuff", "dateCreated": "2018-02-01"};
  const initialState = {
    list: lists  
  };
  const mockStore = configureMockStore();
  let wrapper, store, props;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Aside store={store} {...props} />);
  })

  it('Aside component should render as expected', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
})
