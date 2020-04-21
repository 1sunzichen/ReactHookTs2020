import React from 'react';
import {render} from '@testing-library/react';
import Button from './button';


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