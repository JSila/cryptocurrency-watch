import qs from "query-string"

import {CRYPTO_CURRENCIES_FETCH, setCryptoCurrencies} from "../stores/cryptos"

export default (httpClient, history) => store => dispatch => action => {
    const res = dispatch(action)

    if (action.type === CRYPTO_CURRENCIES_FETCH) {
        httpClient.get("/?" + qs.stringify(action.payload)).then(res => {
            dispatch(setCryptoCurrencies({
                data: res.data,
                fiat: action.payload.convert
            }))

            history.push({search: '?' + qs.stringify({ fiat: action.payload.convert })})
        })
    }

    return res
}