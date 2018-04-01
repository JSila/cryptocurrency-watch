import React from "react"
import {mount} from 'enzyme'

import {Details} from "./Details"

const currency = {
    "id": "bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "6764.39",
    "price_btc": "1.0",
    "24h_volume_usd": "4099560000.0",
    "market_cap_usd": "114665204207",
    "available_supply": "16951300.0",
    "total_supply": "16951300.0",
    "max_supply": "21000000.0",
    "percent_change_1h": "-0.55",
    "percent_change_24h": "-2.32",
    "percent_change_7d": "-20.93",
    "last_updated": "1522571667"
}

describe("Details", () => {

    it("renders message if no data is present", () => {
        const wrapper = mount(<Details currentFiat="USD" />)

        expect(wrapper.find(".loading-message").exists()).toBe(true)
    })

    it("renders table with cryptocurrency details", () => {
        const wrapper = mount(<Details currentFiat="USD" currency={currency} />)

        const tds = wrapper.find("td")

        expect(wrapper.find(".loading-message").exists()).toBe(false)

        expect(tds).toHaveLength(13)
        expect(tds.map(c => c.text())).toEqual(["1", "Bitcoin", "BTC", "6764.39", "1.0", "4099560000.0", "114665204207", "16951300.0", "16951300.0", "21000000.0","-0.55", "-2.32", "-20.93" ])
        expect(wrapper.text()).toContain("Last updated")
    })
})