import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import {addDecorator} from '@storybook/react';
import '../style/index.scss'
export default {
  title: 'Welcome',
  component: Welcome,
};
const WrapperStyle:React.CSSProperties={
  padding:'20px 40px'
}

const storyWrapper=(stroyFn:any)=>{
  <div style={WrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
}
// addDecorator(storyWrapper);
export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
