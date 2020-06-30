import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

//使用classnames 插件
import classnames from 'classnames';
// export enum ButtonSize{
//   Large="lg",
//   Small="sm"
// }
// export enum ButtonType{
//   Primary="primary",
//   Default="default",
//   Danger="danger",
//   Link="link"
// }
export type ButtonSize='lg'|'sm';
export type ButtonType="primary"|"default"|"danger"|"link"
export interface BaseButtonProps{
  className?: string;
  disabled?: boolean;
  size?:ButtonSize;
  btnType?:ButtonType;
  children?:React.ReactNode;
  href?:string;

}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export const Button:FC<ButtonProps>=(props)=>{
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    ...resProps
  }=props;
  // btn 按钮 link按钮 && disabled 不可点击 |  非link按钮 根据disabled
  const classes=classnames('btn',{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,

    //'disabled':(btnType===ButtonType.Link)&&disabled,
    'disabled':(btnType==="link")||disabled,

  })
  if(btnType==="link"&&href){
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
      disabled={disabled}
      {...resProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps={
  disabled:false,
  btnType:"default"
}

export default Button;