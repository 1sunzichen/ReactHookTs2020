import React ,{FC,useState,ChangeEvent} from 'react';
import Input,{InputProps} from '../Input/input';
export interface AutoCompleteProps extends Omit<InputProps,"onSelect">{
    fetchSuggestion:(str:string)=>string[];
    onSelect?:(item:string)=>void
}
export const AutoComplete:FC<AutoCompleteProps>=(props)=>{
    const {
        fetchSuggestion,
        onSelect,
        value,
        ...restProps
    }=props;
    const [inputValue,setInputValue]=useState(value)
    
    return (
        <div className="viking-auto-complete">
            <Input value={value} {...restProps}/>
        </div>
    )
}