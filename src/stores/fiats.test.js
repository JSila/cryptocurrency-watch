import fiats from './fiats'

describe("fiat reducer", () => {

    it("sets fiat currencies from json file as initial state", () => {
        expect(fiats()).toHaveLength(3)
    })
})