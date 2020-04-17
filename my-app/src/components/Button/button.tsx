import React from 'react';
//使用classnames 插件
import classnames from 'classnames';
export enum ButtonSize{
  Large="lg",
  Small="sm"
}
export enum ButtonType{
  Primary="primary",
  Default="default",
  Danger="danger",
  Link="link"
}

interface BaseButtonProps{
  className?: string;
  disabled?: boolean;
  size?:ButtonSize;
  btnType?:ButtonType;
  children:React.ReactNode;
  href?:string;
}
const Button:React.FC<BaseButtonProps>=(props)=>{
  const {
    btnType,
    disabled,
    size,
    children,
    href
  }=props;
  // btn 按钮 link按钮 && disabled 不可点击 |  非link按钮 根据disabled
  const classes=classnames('btn',{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,

    //'disabled':(btnType===ButtonType.Link)&&disabled,
    'disabled':(btnType===ButtonType.Link)||disabled,

  })
  if(btnType===ButtonType.Link&&href){
    return (
      <a
        className={classes}
        href={href}>
          {children}
      </a>
    )
  }else{
    return (
      <button className={classes}
      disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps={
  disabled:false,
  btnType:ButtonType.Default
}

export default Button;