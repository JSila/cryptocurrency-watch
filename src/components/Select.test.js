import React from "react"
import {mount} from "enzyme"
import {Select} from "./Select"

describe("Select", () => {

    it("renders select with 2 options", () => {
        const fiats = ["USD", "EUR"]

        const wrapper = mount(<Select currentFiat="USD" fiats={fiats} fetchCryptoCurrencies={() => {}}/>)

        expect(wrapper.find("option").map(o => o.text())).toEqual(fiats)

    })

    it("calls function on select change click with arguments", () => {
        const fiats = ["USD", "EUR"]
        const fetchFn = jest.fn()

        const wrapper = mount(<Select currentFiat="USD" fiats={fiats} fetchCryptoCurrencies={fetchFn}/>)
        wrapper.find("select").simulate("change", {target:{value:"EUR"}})

        expect(fetchFn).toBeCalledWith({convert: "EUR"})
    })
})