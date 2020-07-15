import { ReactElement, InputHTMLAttributes, FC } from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepand?: string | ReactElement;
    append?: string | ReactElement;
}
export declare const Input: FC<InputProps>;
export default Input;
