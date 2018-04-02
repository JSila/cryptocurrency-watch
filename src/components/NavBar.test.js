import React from "react"
import {NavLink} from "react-router-dom"
import {shallow} from "enzyme"

import {NavBar} from "./NavBar"

describe("NavBar", () => {
    it("renders three NavLink components", () => {
        const wrapper = shallow(<NavBar fetchCryptoCurrencies={() => {}} currentFiat="USD" />)

        const hrefs = wrapper.find(NavLink).map(l => l.prop("to"))

        expect(hrefs).toEqual(["/", "/", "/settings"])
    })

    it("calls fetchCryptoCurrencies with current fiat currency to refresh the data", () => {
        const fetchFn = jest.fn()

        const wrapper = shallow(<NavBar fetchCryptoCurrencies={fetchFn} currentFiat="EUR" />)
        wrapper.find("#refresh-btn").simulate("click")

        expect(fetchFn).toBeCalledWith({convert: "EUR"})

    })
})