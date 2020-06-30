import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu from './menu';
import MenuItem from './menuItem';
import {withInfo} from '@storybook/addon-info';
const defaultButton=()=>(
    <Menu>
            <MenuItem >active朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem >disabled史各庄社区☎️：80716579</MenuItem>
            <MenuItem >史各庄社区☎️：69732821 xyz</MenuItem>
    </Menu>
)


const styles:React.CSSProperties={
  textAlign:'center'
}
const ConterDecorator=(storyFn:any)=><div style={styles}>{storyFn()}</div>
// const styles:
storiesOf('Menu 组件',module)
    .addDecorator(withInfo)
    .addParameters({
        info:{
            text:'这是一个完美的Menu',
            inline:true
        }
    })
    .add('默认Menu',defaultButton)
