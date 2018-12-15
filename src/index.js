import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/blue.css';
//import './assets/css/fonts.css';
import './assets/css/font-awesome.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
