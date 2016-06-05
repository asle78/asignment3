import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import setupStore from './redux/store'

import App from './App'

var store = setupStore();

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('container'));
