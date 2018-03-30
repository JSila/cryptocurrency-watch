import {createAction, handleActions} from 'redux-actions'

const CRYPTO_CURRENCIES_FETCH = 'CRYPTO_CURRENCIES_FETCH'
const CRYPTO_CURRENCIES_SET = 'CRYPTO_CURRENCIES_SET'

export const fetchCryptoCurrencies = createAction(CRYPTO_CURRENCIES_FETCH)
export const setCryptoCurrencies = createAction(CRYPTO_CURRENCIES_SET)

const initialState = {}

export default handleActions({
    [setCryptoCurrencies](state, action) {
        return state
    }
}, initialState)