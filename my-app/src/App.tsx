import React from 'react';

import './App.css';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import ButtonE,{ButtonType,ButtonSize} from './components/Button/button';
function App() {
 
  return (
    <div className="App" data-testid="app"> 
    
      <header className="App-header">
      
        <Menu defaultIndex={0}  mode="vertical" onSelect={(e)=>{console.log(e);
        }}>
        
            <MenuItem index={0} >朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem index={1}>史各庄社区☎️：80716579</MenuItem>
            <MenuItem index={2} disabled>史各庄社区☎️：69732821</MenuItem>
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
