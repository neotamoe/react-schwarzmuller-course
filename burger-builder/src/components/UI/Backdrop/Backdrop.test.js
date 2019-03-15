import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Backdrop from './Backdrop';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    clicked: jest.fn(() => {props.show = true}),
    show: false
  }

  const enzymeWrapper = shallow(<Backdrop {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Backdrop', () => {
    it('should render self', () => {
      const { enzymeWrapper, props } = setup()
      expect(enzymeWrapper.find('div'));

      expect(props.clicked.mock.calls.length).toBe(0);
      expect(props.show).toBe(false);
      props.clicked();  
      expect(props.clicked.mock.calls.length).toBe(1);
      expect(props.show).toBe(true);
    })
  })
})