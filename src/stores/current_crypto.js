import {createAction, handleActions} from "redux-actions";

const CRYPTO_CURRENCY_SELECT = 'CRYPTO_CURRENCY_SELECT'
export const selectCryptoCurrency = createAction(CRYPTO_CURRENCY_SELECT)

const initialState = null

export default handleActions({
    [selectCryptoCurrency](state, action) {
        return state
    }
}, initialState)