import React from "react"
import {shallow} from "enzyme"
import {App} from './App'
import List from "./List"
import Select from "./Select"

describe("App", () => {

    it("renders Select, List and two Route components", () => {
        const wrapper = shallow(<App qs="" fetchCryptoCurrencies={()=>{}} currentFiat=""/>)
        expect(wrapper.find(List).exists()).toBe(true)
        expect(wrapper.find(Select).exists()).toBe(true)

        expect(wrapper.find("Route").length).toEqual(2)
    })

    it("fetches cryptocurrencies in USD in component did mount", () => {
        const fetchFn = jest.fn()
        const wrapper = shallow(<App qs="" fetchCryptoCurrencies={fetchFn} currentFiat="USD"/>)
        expect(fetchFn).toBeCalledWith({convert:"USD"})
    })

    it("fetches cryptocurrencies in EUR in component did mount (read from query string)", () => {
        const fetchFn = jest.fn()
        const wrapper = shallow(<App qs="?fiat=EUR" fetchCryptoCurrencies={fetchFn} currentFiat="USD"/>)
        expect(fetchFn).toBeCalledWith({convert:"EUR"})
    })
})