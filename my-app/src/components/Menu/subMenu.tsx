import React,{useContext,FunctionComponentElement,useState} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';
import {MenuItemProps} from './menuItem';
import Transition from '../Transition/transition';
import {CSSTransition} from 'react-transition-group';
import Icon from '../Icon/icon';
export interface SubMenuProps{
    index?:string;
    title:string;
    className?:string
    // CSSTransition?:HTMLElement
}
const SubMenu:React.FC<SubMenuProps>=({
    index,children,title,className
})=>{
    const  context=useContext(MenuContext);
    const  openedSubMenus=context.defaultOpenSubMenus as Array<string>;

    const isOpend=(index && context.mode==="vertical")?
    openedSubMenus.includes(index):false;
    const [menuOpen,setOpen]=useState(isOpend);
    const  classes=classNames('menu-item submenu-item',className,{
      'is-active':context.index===index,
      'is-opened':menuOpen,
      'is-vertical':context.mode==='vertical'
    })
    const handleClick=(e:React.MouseEvent)=>{
      e.preventDefault();
      setOpen(!menuOpen);
    }

    let timer:any 
    const handleMouse=(e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer);
        e.preventDefault();
        timer=setTimeout(()=>{
            setOpen(toggle);
        },300)
    }
    const clickEvents=context.mode==="vertical"?{
        onClick:handleClick
    }:{}
    const hoverEnents=context.mode!=="vertical"?{
        onMouseEnter:(e:React.MouseEvent)=>{
            handleMouse(e,true)
        },
        onMouseLeave:(e:React.MouseEvent)=>{
            handleMouse(e,false)
        }
    }:{}

    const renderChildren=()=>{
      const subMenuClasses=classNames('viking-submenu',{
          'menu-opened':menuOpen
      })
    const childrenComponent=React.Children.map(children,(child,i)=>{
         const childElement=child as FunctionComponentElement<MenuItemProps>;
         if(childElement.type.displayName==="MenuItem"){
             return React.cloneElement(childElement,{
                 index:`${index}-${i}`
             })
         }else{
             console.log("Submenu 应该返回 MenuItem类型组件");
             
         }
     }) 
     return (
        //  <CSSTransition 
        //  in={menuOpen}
        //  timeout={300}
        //  classNames="zoom-in-top"
        //  appear
        //  unmountOnExit
        //  > 
        <Transition
            in={menuOpen}
            timeout={300}
            animation="zoom-in-top"
        >
         <ul className={subMenuClasses}>
             {childrenComponent}
         </ul>
         </Transition>
        //  </CSSTransition>
     )
  }
  return (
      <li key={index} className={classes} {...hoverEnents}>
          <div className="sunmenu-title" {...clickEvents}>
              {title}
          </div>
          <Icon icon="angle-down" className="arrow-icon"/>
          {renderChildren()}
      </li>
  )
}
SubMenu.displayName='SubMenu';
export default SubMenu;