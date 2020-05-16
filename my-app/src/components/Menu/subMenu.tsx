import React,{useContext,FunctionComponentElement, FunctionComponent,useState} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';
import {MenuItemProps} from './menuItem';
import { render } from '@testing-library/react';
export interface SubMenuProps{
    index?:number;
    title:string;
    className?:string
}
const SubMenu:React.FC<SubMenuProps>=({
    index,children,title,className
})=>{
    const [menuOpen,setOpen]=useState(false);
    const  context=useContext(MenuContext);
    const  classes=classNames('menu-item sunmenu-item',className,{
      'is-active':context.index===index
    })
    const handleClick=(e:React.MouseEvent)=>{
      e.preventDefault();
      setOpen(!menuOpen);
    }
    const renderChildren=()=>{
      const subMenuClasses=classNames('viking-submenu',{
          'menu-opened':menuOpen
      })
    const childrenComponent=React.Children.map(children,(child,i)=>{
         const childElement=child as FunctionComponentElement<MenuItemProps>;
         if(childElement.type.displayName==="MenuItem"){
             return childElement
         }else{
             console.log("Submenu 应该返回 MenuItem类型组件");
             
         }
     }) 
     return (
         <ul className={subMenuClasses}>
             {childrenComponent}
         </ul>
     )
  }
  return (
      <li key={index} className={classes}>
          <div className="sunmenu-title" onClick={handleClick}>
              {title}
          </div>
          {renderChildren()}
      </li>
  )
}
SubMenu.displayName='SubMenu';
export default SubMenu;