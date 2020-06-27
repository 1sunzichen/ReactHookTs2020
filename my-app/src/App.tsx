import React, { useState } from 'react';

import './App.css';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';

import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import Transition from './components/Transition/transition';
import ButtonE,{ButtonType,ButtonSize} from './components/Button/button';
import Icon from './components/Icon/icon';
library.add(fas);
function App() {
 const [show,setShow]=useState(false)
  return (
    <div className="App" data-testid="app"> 
    
      <header className="App-header">
      {/* <Icon icon="arrow-down"  theme="danger"/> */}
        <Menu defaultIndex={"0"}  
          mode="vertical"
          defaultOpenSubMenus={['0']}
         
         onSelect={(e)=>{console.log(e);
        }}>
        
            {/* <MenuItem  >朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem >史各庄社区☎️：80716579</MenuItem>
            <MenuItem  disabled>史各庄社区☎️：69732821</MenuItem> */}
            <SubMenu title='北京市社区电话号码昌平区00'>
              <MenuItem>朱辛庄社区☎️：60702429</MenuItem>
              <MenuItem>史各庄社区☎️：80716579</MenuItem>
              <MenuItem  disabled>史各庄社区☎️：69732821</MenuItem>
            </SubMenu>
        </Menu>
        <ButtonE size="lg" onClick={()=>{setShow(!show)
        console.log(show,'show');
        }}>Toggle</ButtonE>
          <Transition
            in={show}
            timeout={300}
            animation="zoom-in-left"
          >
            <div style={{color:"#555"}}>
              <p>十字军</p>
              <p>十字军十字军十字军十字军十字军</p>
              <p>十字军</p>
              <p>十字军</p>
              <p>十字军</p>
              <p>十字军</p>
            </div>
            </Transition>  
            <Transition
            in={show}
            timeout={300}
            animation="zoom-in-left"
            wrapper
          >
               <ButtonE btnType="primary" size="lg">大按钮</ButtonE>
            </Transition>  
        {/* <h2>武汉加油</h2>
        <ButtonE size={ButtonSize.Large} btnType={ButtonType.Primary}>武汉加油</ButtonE>
        <ButtonE disabled btnType={ButtonType.Danger}>武汉加油</ButtonE>
        <ButtonE btnType={ButtonType.Default}>武汉加油</ButtonE>
        <ButtonE disabled>武汉加油</ButtonE>
        <ButtonE btnType={ButtonType.Link} href="www.baidu.com" disabled>武汉加油</ButtonE> */}
      </header>
    </div>
  );
}

export default App;
