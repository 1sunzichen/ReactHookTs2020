import React from 'react';
import {storiesOf} from '@storybook/react';
storiesOf("Welcome",module)
.add('welcome',()=>{
    return (
        <div>
            <h1>欢迎使用艾克组件库</h1>
             <h3>安装试试</h3>
             <code>
                 yarn add ekkoship  
             </code>
        </div>
    )
},{info:{disable:true}})