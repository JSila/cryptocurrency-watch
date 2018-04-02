import React from "react"
import {shallow} from "enzyme"
import {Route} from "react-router-dom"

import {App} from './App'
import NavBar from "./NavBar"

describe("App", () => {

    it("renders NavBar and two Route components", () => {
        const wrapper = shallow(<App fetchCryptoCurrencies={()=>{}} currentFiat="USD" qs=""/>)

        expect(wrapper.find(NavBar).exists()).toBe(true)
        expect(wrapper.find(Route).length).toEqual(2)
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