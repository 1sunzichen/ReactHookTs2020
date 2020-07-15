import React, { useState, createContext } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizonal': mode !== 'horizontal'
    });
    var handleClick = function (index) {
        //把索引进行设置返回出去
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    //使用context
    var passedContext = {
        //传递方法和要操作的参数
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                //增加 index 属性
                return React.cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                console.error('Warning : Menu 返回不是 menuitem 组件');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    //默认索引为0
    defaultIndex: "0",
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
export default Menu;
