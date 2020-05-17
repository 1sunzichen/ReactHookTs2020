import React,{useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';
export interface MenuItemProps{
  index?:string;
  disabled?:boolean;
  className?:string;
  style?:React.CSSProperties;
}
const MenuItem:React.FC<MenuItemProps>=(props)=>{
  const {index,disabled,className,style,children}=props;
  //获取context 方法和参数
  const context=useContext(MenuContext);
  const classes=classNames('menu-item',className,{
    'is-disabled':disabled,
    'is-active':context.index===index
  })
  //点击方法中调用context方法
  const handleClick=()=>{
    if(context.onSelect&&!disabled&&(typeof index==='string')){
      context.onSelect(index)
    }
  }

  return(
    <li className={classes} style={style}
      onClick={handleClick}
    >
      {children}
    </li>
  )
}
//静态属性添加
MenuItem.displayName='MenuItem'
export default MenuItem;