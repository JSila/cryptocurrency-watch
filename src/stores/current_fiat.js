import {handleActions} from 'redux-actions'
import {setCryptoCurrencies} from "./cryptos"

const initialState = 'USD'

export default handleActions({
    [setCryptoCurrencies](state, action) {
        return action.payload.fiat
    }
}, initialState)