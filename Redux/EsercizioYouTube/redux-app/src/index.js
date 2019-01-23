import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//creo lo store
import {combineReducers, createStore} from 'redux';

import { Provider } from 'react-redux'
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});


const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'john'
    }
};

const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();