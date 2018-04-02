import React from "react"
import {shallow} from "enzyme"
import {NavLink} from "react-router-dom"

import {Link} from './Link'

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

describe("Link", () => {

    it("renders Link with cryptocurrency name with link data", () => {
        const wrapper = shallow(<Link currency={currency} selectCryptoCurrency={() => {}} currentFiat="USD"/>)
        const navLink = wrapper.find(NavLink)

        expect(navLink.find("h5").text()).toEqual("1. Bitcoin (BTC)")
        expect(navLink.find("p").text()).toEqual("Current value in USD: 6764.39  (-2.32 % change in 24 h)")
        expect(navLink.prop("to")).toEqual("/list/bitcoin")
    })

    it("calls function on link click", () => {
        const selectFn = jest.fn()

        const wrapper = shallow(<Link currency={currency} selectCryptoCurrency={selectFn} currentFiat="USD"/>)
        const navLink = wrapper.find(NavLink).simulate("click")

        expect(selectFn).toBeCalledWith(currency.id)
    })
})