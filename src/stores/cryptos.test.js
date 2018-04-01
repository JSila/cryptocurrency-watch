import cryptos, {setCryptoCurrencies, getCryptoCurrencies} from "./cryptos"

const data = [
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "363.805",
        "price_btc": "0.0560322",
        "24h_volume_usd": "1102200000.0",
        "market_cap_usd": "35853026179.0",
        "available_supply": "98550119.0",
        "total_supply": "98550119.0",
        "max_supply": null,
        "percent_change_1h": "-2.51",
        "percent_change_24h": "-9.72",
        "percent_change_7d": "-30.37",
        "last_updated": "1522593253"
    },
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "6544.68",
        "price_btc": "1.0",
        "24h_volume_usd": "3913970000.0",
        "market_cap_usd": "110943288339",
        "available_supply": "16951675.0",
        "total_supply": "16951675.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-1.55",
        "percent_change_24h": "-7.73",
        "percent_change_7d": "-23.64",
        "last_updated": "1522593267"
    }
]

describe("cryptos reducer", () => {
    it("handles setCryptoCurrencies action by normalizing the data", () => {
        const payload = {data}

        const newState = cryptos({}, setCryptoCurrencies(payload))

        expect(newState.bitcoin).toBeDefined()
        expect(newState.bitcoin.id).toBeDefined()
        expect(newState.ethereum).toBeDefined()
        expect(newState.ethereum.id).toBeDefined()
    })
})

describe("getCryptoCurrencies selector", () => {
    it("returns cryptocurrencies ids sorted by rank", () => {
        const state = {
            cryptos: cryptos({}, setCryptoCurrencies({data}))
        }

        expect(getCryptoCurrencies(state)).toEqual(["bitcoin", "ethereum"])
    })
})