import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    clicked: jest.fn(),
    disabled: true,
    children: 'submit'
  }

  const enzymeWrapper = shallow(<Button {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Button', () => {
    it('should render self', () => {
      const { enzymeWrapper, props } = setup()
      expect(enzymeWrapper.find('button'));

      const button = enzymeWrapper.find('button')
      const buttonProps = button.props();
      expect(props.clicked.mock.calls.length).toBe(0);
      props.clicked()  
      expect(buttonProps.disabled).toBe(true)
      expect(buttonProps.children).toEqual('submit')
      expect(props.clicked.mock.calls.length).toBe(1);
    })
  })
})