import React from 'react';
import './App.css';
import {Button,Icon,Menu} from 'ekkoship'
function App() {
  return (
    <div className="App">
      <Button btnType="primary">按钮</Button>
      <Icon icon="check-circle" theme="primary" size="8x"/>
      <Menu defaultIndex={"0"}  
          mode="vertical"
          defaultOpenSubMenus={['0']}
         
         onSelect={(e)=>{console.log(e);
        }}>
        
            {/* <MenuItem  >朱辛庄社区☎️：60702429</MenuItem>
            <MenuItem >史各庄社区☎️：80716579</MenuItem>
            <MenuItem  disabled>史各庄社区☎️：69732821</MenuItem> */}
            <Menu.SubMenu title='北京市社区电话号码昌平区00'>
              <Menu.Item>朱辛庄社区☎️：60702429</Menu.Item>
              <Menu.Item>史各庄社区☎️：80716579</Menu.Item>
              <Menu.Item  disabled>史各庄社区☎️：69732821</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    </div>
  );
}

export default App;
