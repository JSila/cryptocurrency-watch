import {compose, applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {routerMiddleware} from 'react-router-redux'

import rootReducer from './stores'
import axios from './utils/axios'
import apiMiddleware from './middlewares/api'
import history from './utils/history'

const composeEnhancer = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools

const middlewares = [
    apiMiddleware(axios, history),
    routerMiddleware(history)
]

export default () => composeEnhancer(
    applyMiddleware(...middlewares)
)(createStore)(rootReducer)