import React, { PropsWithChildren } from 'react';
import {CSSTransition} from 'react-transition-group';
//import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
//type AnimationName='zoom-in-top' |'zoom-in-left'|'zoom-in-bottom'|'zoom-in-right';

// interface TransitionProps extends CSSTransitionProps{
//     in?:any,
//     animation?:AnimationName,
//     classNames?:any,
//     unmountOnExit?:Boolean,
//     // CSSTransition?:HTMLElement,
//     appear?:Boolean,
//     timeout?:Number
// }

const Transition=
// :React.FC<TransitionProps>=(props:PropsWithChildren<TransitionProps>)
(props)=>{
    const {
        children,   
        classNames,
        animation,
        wrapper,
        ...resProps
    }=props;
    return(
        <CSSTransition
            classNames={classNames?classNames:animation}
            {...resProps}
            unmountOnExit={true}
             appear={true}
        >

            {wrapper?<div>{children}</div>:children}
            
        </CSSTransition>
    )
}
// Transition.defaultProps={
//     unmountOnExit:true,
//     appear:true,
// }
export default Transition;