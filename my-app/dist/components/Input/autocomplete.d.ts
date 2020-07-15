import { FC } from 'react';
import { InputProps } from '../Input/input';
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestion: (str: string) => string[];
    onSelect?: (item: string) => void;
}
export declare const AutoComplete: FC<AutoCompleteProps>;
