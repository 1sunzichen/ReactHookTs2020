import React from 'react';

import './App.css';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import ButtonE,{ButtonType,ButtonSize} from './components/Button/button';
function App() {
 
  return (
    <div className="App" data-testid="app"> 
    
      <header className="App-header">
      
        <Menu defaultIndex={"0"}  
          mode="vertical"
          defaultOpenSubMenus={['0']}
         onSelect={(e)=>{console.log(e);
        }}>
        
            {/* <MenuItem  >朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem >史各庄社区☎️：80716579</MenuItem>
            <MenuItem  disabled>史各庄社区☎️：69732821</MenuItem> */}
            <SubMenu title='abcd'>
              <MenuItem>朱辛庄社区☎️：60702429</MenuItem>
              <MenuItem>史各庄社区☎️：80716579</MenuItem>
              <MenuItem  disabled>史各庄社区☎️：69732821</MenuItem>
            </SubMenu>
        </Menu>
       <h1
          
        >
          hello
        </h1>
        <h2>武汉加油</h2>
        <ButtonE size={ButtonSize.Large} btnType={ButtonType.Primary}>武汉加油</ButtonE>
        <ButtonE disabled btnType={ButtonType.Danger}>武汉加油</ButtonE>
        <ButtonE btnType={ButtonType.Default}>武汉加油</ButtonE>
        <ButtonE disabled>武汉加油</ButtonE>
        <ButtonE btnType={ButtonType.Link} href="www.baidu.com" disabled>武汉加油</ButtonE>
      </header>
    </div>
  );
}

export default App;
