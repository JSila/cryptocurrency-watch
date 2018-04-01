import React from "react"
import {shallow} from 'enzyme'
import {List} from "./List"
import Link from "./Link"

describe("List", () => {

    it("renders 2 Link components", () => {
        const wrapper = shallow(<List currencies={["bitcoin", "ethereum"]} />)
        expect(wrapper.find(Link).length).toEqual(2)
    })
})