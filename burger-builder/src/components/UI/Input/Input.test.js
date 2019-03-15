import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from './Input';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    invalid: true,
    shouldValidate: true,
    touched: false,
    elementType: 'input',  // input, select or textarea
    changed: jest.fn(),
    elementConfig: {
        type: 'email',
        placeholder: 'Enter your email',
        // need to find way to test all the different element types and configs
        // options: [
        //     {value: 'fastest', displayValue: 'Fastest'},
        //     {value: 'cheapest', displayValue: 'Cheapest'},
        // ]
    },
    value: "test value",
    validation: {
        required: true,
        // isEmail: true,  // validation also has property isEmail, minLength
        // minLength: 5,
        // maxLength: 5
    }
  }

  const enzymeWrapper = shallow(<Input {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Input', () => {
    it('should render be able to render traditional input field', () => {
      const { enzymeWrapper, props } = setup()
      expect(enzymeWrapper.find('input'));
        
      expect(props.changed.mock.calls.length).toBe(0);
      expect(props.elementType).toEqual('input');
      expect(props.elementConfig.type).toEqual('email');
      expect(props.elementConfig.placeholder).toEqual('Enter your email');
      expect(props.value).toBe('test value')
      props.changed('event', 'id2'); 
      expect(props.changed.mock.calls.length).toBe(1);
;    })
  })
})