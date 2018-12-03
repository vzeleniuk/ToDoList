import React from 'react';
// import { describe, beforeEach, it, expect } from 'jest';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import Root from '../../src/components/Root';



// describe('<Root />', () => {
//     describe('render()', () => {
//         test('renders the component', () => {
//             const wrapper = shallow(<Root />);
//             const component = wrapper.dive();

//             expect(toJson(component)).toMatchSnapshot();
//         });
//     });
// });

describe("Root", () => {
    let props;
    let mountedRoot;
    const root = () => {
      if (!mountedRoot) {
        mountedRoot = mount(
          <Root {...props} />
        );
      }
      return mountedRoot;
    }
  
    beforeEach(() => {
      props = {
        lists: undefined,
      };
      mountedRoot = undefined;
    });
    
    it("always renders a div", () => {
        const divs = root().find("div");
        expect(divs.length).toBeGreaterThan(0);
      });
  });