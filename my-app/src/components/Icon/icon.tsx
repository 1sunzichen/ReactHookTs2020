import React from 'react';
import classNames from 'classnames';
import {FontAwesomeIcon,FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
export type ThemeProps='primary'|'secondary'|'success'|'info'|'danger'|'warning'|'light'|'dark';
export interface IconProps extends  FontAwesomeIconProps {
    theme?:ThemeProps
}


const Icon:React.FC<IconProps>=(props)=>{
    const {className,theme,...resetProps}=props;
    const classes=classNames('viking-icon',className,{
        [`icon${theme}`]:theme
    })
    return (
        <FontAwesomeIcon className={classes} 
            {...resetProps}
        />
    )
}
export default Icon;