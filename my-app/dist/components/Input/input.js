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
import React from "react";
//使用classnames 插件
import classnames from 'classnames';
export var Input = function (props) {
    var _a;
    var className = props.className, size = props.size, disabled = props.disabled, resetProps = __rest(props, ["className", "size", "disabled"]);
    var classes = classnames('inp', className, (_a = {},
        _a["inp-" + size] = size,
        _a['disabled'] = disabled,
        _a));
    return (React.createElement("input", __assign({ className: classes, disabled: disabled }, resetProps)));
    //
};
Input.defaultProps = {
    disabled: false
};
export default Input;
