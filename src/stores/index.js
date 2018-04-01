import {combineReducers} from "redux"

import fiats from "./fiats"
import currentFiat from "./current_fiat"
import cryptos from "./cryptos"
import currentCrypto from "./current_crypto"
import {routerReducer as router} from "react-router-redux"

export default combineReducers({
    fiats,
    currentFiat,
    currentCrypto,
    cryptos,
    router
})