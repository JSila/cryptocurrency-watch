import {createAction, handleActions} from "redux-actions"
import {createSelector} from "reselect"
import {schema, normalize} from "normalizr"

export const CRYPTO_CURRENCIES_FETCH = "CRYPTO_CURRENCIES_FETCH"
export const CRYPTO_CURRENCIES_SET = "CRYPTO_CURRENCIES_SET"

export const fetchCryptoCurrencies = createAction(CRYPTO_CURRENCIES_FETCH)
export const setCryptoCurrencies = createAction(CRYPTO_CURRENCIES_SET)

const initialState = {}

export default handleActions({
    [setCryptoCurrencies](state, action) {
        const data = normalize(action.payload.data, [new schema.Entity("cryptos")])

        return data.entities.cryptos
    }
}, initialState)

export const getCryptoCurrencies = createSelector(
    state => state.cryptos,
    cryptos => {
        let vals = Object.values(cryptos)
        vals.sort((a,b) => a.rank - b.rank)
        return vals.map(c => c.id)
    }
)