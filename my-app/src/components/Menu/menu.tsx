import React,{useState,createContext} from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './menuItem';
type MenuMode='horizontal'|'vertical';
type SelectCallback=(selectedIndex:string)=>void
export interface MenuProps{
  defaultIndex?:string;
  className?:string;
  mode?:MenuMode;
  style?:React.CSSProperties;
  onSelect?:SelectCallback;
  //默认defaultOpenSubmenuIndex
  defaultOpenSubMenus?:string[];
}

  

interface IMenuContext{
  index:string;
  onSelect?:SelectCallback;
  mode?:MenuMode;
  defaultOpenSubMenus?:string[];
}

export const MenuContext=createContext<IMenuContext>({index:"0"});
const Menu:React.FC<MenuProps>=(props)=>{
  const {className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus}=props
  const [currentActive,setActive]=useState(defaultIndex);
  const classes=classNames('viking-menu',className,{
    'menu-vertical':mode==='vertical',
    'menu-horizonal':mode!=='horizontal'
  })
  const handleClick=(index:string)=>{
    //把索引进行设置返回出去
    setActive(index);
    if(onSelect){
      onSelect(index)
    }
  }
  //使用context
  const passedContext:IMenuContext={
    //传递方法和要操作的参数
    index:currentActive?currentActive:"0",
    onSelect:handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren=()=>{
    return React.Children.map(children,(child,index)=>{
      const childElement=child as React.FunctionComponentElement<MenuItemProps>
      const {displayName}=childElement.type; 
      if(displayName==="MenuItem"||displayName==="SubMenu"){
        //增加 index 属性
        return React.cloneElement(childElement,{
          index:index.toString()
        })
      }else{
        console.error('Warning : Menu 返回不是 menuitem 组件')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="menu">
        {/* //使用provider */}
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps={
  //默认索引为0
  defaultIndex:"0",
  mode:'horizontal',
  defaultOpenSubMenus:[]
}
export default Menu;
