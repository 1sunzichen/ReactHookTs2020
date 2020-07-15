// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style/index.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(fas)
export {default as Button} from './components/Button';
export {default as Menu} from './components/Menu';
export {default as Icon} from './components/Icon';
export {default as Transition} from './components/Transition';
