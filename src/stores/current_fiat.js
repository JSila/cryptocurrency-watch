import {createAction, handleActions} from 'redux-actions'

const FIAT_CURRENCY_SELECT = 'FIAT_CURRENCY_SELECT'
export const selectFiatCurrency = createAction(FIAT_CURRENCY_SELECT)

const initialState = 'USD'

export default handleActions({
    [selectFiatCurrency](state, action) {
        return state
    }
}, initialState)