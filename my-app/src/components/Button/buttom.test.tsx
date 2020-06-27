import React from 'react';
import {render} from '@testing-library/react';
import Button,{BaseButtonProps} from './button';

const defaultProps={
  onClick:jest.fn()
}

const testProps:BaseButtonProps={
  btnType:'primary',
  size:"lg",
  className:'klass'
}

const disabledProps:BaseButtonProps={
  disabled:true,
  onClick:jest.fn()
}
describe('test button',()=>{
  it('shoule render corrent default button',()=>{
    const wrapper=render(<Button>Nice</Button>);
  const element=wrapper.getByText("Nice");
  
  expect(element).toBeInTheDocument()
  expect(element.tagName).toEqual("BUTTON")
  expect(element).toHaveClass('btn btn-default')
  })
  it('shoule render the corrent component based on different props',()=>{

  })
  it('shoule render a link ',()=>{

  })
  it('shoule render a disabled ',()=>{

  })
  
})