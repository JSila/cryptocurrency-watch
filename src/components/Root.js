import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "react-router-redux"

import history from "../utils/history"
import configureStore from "../configureStore"

import App from "./App"

const store = configureStore()

export default (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App qs={window.location.search}/>
        </ConnectedRouter>
    </Provider>
)
