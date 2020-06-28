import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const defaultButton=()=>(
    <Button onClick={action('clicked')}>default Button</Button>
)

const buttonWithSize=()=>(
    <>
      <Button size="lg">large button</Button>
      <Button size="sm">large button</Button>
    </>
)
const buttonWithType=()=>(
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger primary</Button>
        <Button btnType="link">link button</Button>
    </>
)
const styles:React.CSSProperties={

}
const ConterDecorator=(storyFn:any)=><div style={styles}>{storyFn()}</div>
// const styles:
storiesOf('Button 组件',module)
    .addDecorator(ConterDecorator)
    .add('默认button',defaultButton)
    .add('不同尺寸的 Button',buttonWithSize)
    .add('不同类型的 Button',buttonWithType)