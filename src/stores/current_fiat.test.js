import currentFiat from './current_fiat'
import {setCryptoCurrencies} from "./cryptos"

describe("currentFiat reducer", () => {

    it("handles setCryptoCurrencies action", () => {
        const state = "USD"
        const payload = { fiat: "EUR" }

        const newState = currentFiat(state, setCryptoCurrencies(payload))

        expect(newState).toEqual("EUR")
    })
})