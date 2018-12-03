import React from 'react';
import { expect } from 'jest';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import { Root } from './Root';

// describe('<Root />', () => {
//   it('renders 1 <Root /> component', () => {
//     const store = createNormalReduxStore();
//     store.dispatch(actions.fetchLists({ userId: 1, name: 'Kumar' }));
//     const component = shallow(<Root />);
//     expect(component).toHaveLength(1);
//   })
// })

describe('<Root />', () => {
  test('Root component should render as expected', () => {
    const component = shallow(<Root />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});

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