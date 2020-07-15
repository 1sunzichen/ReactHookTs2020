var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import Input from '../Input/input';
export var AutoComplete = function (props) {
    var fetchSuggestion = props.fetchSuggestion, onSelect = props.onSelect, value = props.value, restProps = __rest(props, ["fetchSuggestion", "onSelect", "value"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    return (React.createElement("div", { className: "viking-auto-complete" },
        React.createElement(Input, __assign({ value: value }, restProps))));
};
