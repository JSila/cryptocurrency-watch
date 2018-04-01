import currentCrypto from "./current_crypto"
import {selectCryptoCurrency} from "./current_crypto"

describe("currentCrypto reducer", () => {
    
    it("handles selectCryptoCurrency action", () => {
        const state = "USD"
        const payload = "EUR"

        const newState = currentCrypto(state, selectCryptoCurrency(payload))

        expect(newState).toEqual("EUR")
    })
})