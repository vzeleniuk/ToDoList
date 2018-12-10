// import React from 'react';
// import * as enzyme from 'enzyme';
// import toJson from 'enzyme-to-json';
// // import createSagaMiddleware from 'redux-saga';
// import configureMockStore from 'redux-mock-store';
// // import fetchMock from 'fetch-mock'
// import Root from './Root';
// import Aside from './Aside';
// import Main from './Main';
// import { Pulse } from 'react-preloading-component';

// import { mapStateToProps, mapDispatchToProps } from './Root';

// // const middlewares = [createSagaMiddleware()]

// describe('<Root />', () => {
//   const initialState = {};
//   // const props = {
//   //   fetchLists: fetchLists
//   // }
//   const mockStore = configureMockStore();
//   let wrapper, store;
//   // const dispatch = jest.fn();
//   // const fetchLists = jest.fn();
//   store = mockStore(initialState);
//   wrapper = enzyme.shallow(<Root store={store}/>)

//   // const mounted = enzyme.mount(<Root store={store} />)

//   it('Root component should render as expected', () => {
//     const tree = toJson(wrapper);
//     expect(tree).toMatchSnapshot();
//   });


//   // it('should show todo lists from store', () => {
//   //   expect(wrapper.props().list).toBeTruthy();
//   // })

//   // it('should fetch data from firebase', () => {
//   //   expect(fetchLists.mock.calls.length).toEqual(1);
//   // })

//   // it('should render a progress component while loading data', () => {
//   //   const containsLoader = wrapper.containsMatchingElement('<Pulse />');
//   //   expect(containsLoader).toBeTruthy();
// });