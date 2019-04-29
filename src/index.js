import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'
//import reduxPromise from 'redux-promise-middleware' -> Outdated
import { createPromise } from 'redux-promise-middleware';

const promise = createPromise({ 
    types: { 
        pending:  'waiting',
        fulfilled: 'success'
    }});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(promise,thunk ,logger)    
    ))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    
,document.getElementById('root'))
