import React from "react"
import {shallow} from 'enzyme'
import {Route} from "react-router-dom"

import IndexScreen from "./IndexScreen"
import List from "./List"

describe("IndexScreen", () => {

    it("renders List and two Route components", () => {
        const wrapper = shallow(<IndexScreen match={{}}/>)

        expect(wrapper.find(List).exists()).toEqual(true)
        expect(wrapper.find(Route).length).toEqual(2)
    })
})