import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Transition from './components/Transition/transition';
import ButtonE from './components/Button/button';
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App", "data-testid": "app" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { defaultIndex: "0", mode: "vertical", defaultOpenSubMenus: ['0'], onSelect: function (e) {
                    console.log(e);
                } },
                React.createElement(SubMenu, { title: '\u5317\u4EAC\u5E02\u793E\u533A\u7535\u8BDD\u53F7\u7801\u660C\u5E73\u533A00' },
                    React.createElement(MenuItem, null, "\u6731\u8F9B\u5E84\u793E\u533A\u260E\uFE0F\uFF1A60702429"),
                    React.createElement(MenuItem, null, "\u53F2\u5404\u5E84\u793E\u533A\u260E\uFE0F\uFF1A80716579"),
                    React.createElement(MenuItem, { disabled: true }, "\u53F2\u5404\u5E84\u793E\u533A\u260E\uFE0F\uFF1A69732821"))),
            React.createElement(ButtonE, { size: "lg", onClick: function () {
                    setShow(!show);
                    console.log(show, 'show');
                } }, "Toggle"),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
                React.createElement("div", { style: { color: "#555" } },
                    React.createElement("p", null, "\u5341\u5B57\u519B"),
                    React.createElement("p", null, "\u5341\u5B57\u519B\u5341\u5B57\u519B\u5341\u5B57\u519B\u5341\u5B57\u519B\u5341\u5B57\u519B"),
                    React.createElement("p", null, "\u5341\u5B57\u519B"),
                    React.createElement("p", null, "\u5341\u5B57\u519B"),
                    React.createElement("p", null, "\u5341\u5B57\u519B"),
                    React.createElement("p", null, "\u5341\u5B57\u519B"))),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left", wrapper: true },
                React.createElement(ButtonE, { btnType: "primary", size: "lg" }, "\u5927\u6309\u94AE")))));
}
export default App;
