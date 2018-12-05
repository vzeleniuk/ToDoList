import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import createSagaMiddleware from 'redux-saga';
import configureMockStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock'
import Root from './Root'; 

// const middlewares = [createSagaMiddleware()]

describe('<Root />', () => {
  const lists = {"listName": "Kitty Stuff", "dateCreated": "2018-02-01"};
  const initialState = {
    list: lists  
  };
  const props = {
    fetchLists: jest.fn()
  }
  const mockStore = configureMockStore();
  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Root store={store} {...props} />);
  })

  it('Root component should render as expected', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('should show todo lists from store', () => {
    expect(wrapper.props().list).toBe(true);
  })

  it('should fetch data from firebase', () => {
    expect(wrapper.props.fetchLists.mock.calls.length).toEqual(1);
  })

  // test('Root fetches data from firebase', () => {
  //       store.dispatch(actions.fetchLists({ userId: 1, name: 'Kumar' }));
  //       const wrapper = shallow(<Root />);
  //       expect(wrapper).toHaveLength(1);
  //     })
});

// const saga = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState)
//   }
// }

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn()
//   }
//   const next = jest.fn();
//   const invoke = action => saga(store)(next)(action);
//   return { store, next, invoke }
// }

// describe("Root", () => {
//     let props;
//     let mountedRoot;
//     const root = () => {
//       if (!mountedRoot) {
//         mountedRoot = mount(
//           <Root {...props} />
//         );
//       }
//       return mountedRoot;
//     }
  
//     beforeEach(() => {
//       props = {
//         lists: undefined,
//       };
//       mountedRoot = undefined;
//     });
    
//     it("always renders a div", () => {
//         const divs = root().find("div");
//         expect(divs.length).toBeGreaterThan(0);
//       });
//   });