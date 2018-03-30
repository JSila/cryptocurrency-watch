import {compose, applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './stores'
import axios from './utils/axios'
import apiMiddleware from './middlewares/api'

const composeEnhancer = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools

const middlewares = [
    apiMiddleware(axios)
]

export default () => composeEnhancer(applyMiddleware(...middlewares))(createStore)(rootReducer)