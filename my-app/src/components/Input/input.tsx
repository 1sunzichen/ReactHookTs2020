import React,{ReactElement,InputHTMLAttributes,FC} from "react";

//使用classnames 插件
import classnames from 'classnames';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type InputSize='lg'|'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'>{
    disabled?:boolean;
    size?:InputSize;
    icon?:IconProp;
    prepand?:string|ReactElement;
    append?:string|ReactElement;
}

export const Input:FC<InputProps>=(props)=>{
    const {className,size,disabled,...resetProps}=props;
    const classes=classnames('inp',className,{
        [`inp-${size}`]:size,
        'disabled':disabled
    })
    return (
        <input className={classes}
            disabled={disabled}
            {...resetProps}
        />
  
    )
    //
}
Input.defaultProps={
    disabled:false
}

export default Input;