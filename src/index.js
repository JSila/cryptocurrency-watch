import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'

import App from "./components/App"

const store = configureStore()

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
