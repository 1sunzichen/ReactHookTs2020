import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import ButtonE,{ButtonType,ButtonSize} from './components/Button/button';
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
            <MenuItem>coollink</MenuItem>
            <MenuItem>coollink2</MenuItem>
            <MenuItem>coollink3</MenuItem>
        </Menu>
        <h1>武汉加油</h1>
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
