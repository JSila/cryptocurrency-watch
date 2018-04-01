import React, {Component} from "react"
import PropTypes from "prop-types"
import {Route, withRouter} from "react-router-dom"
import {connect }from "react-redux"
import {compose} from "redux"

import {fetchCryptoCurrencies} from "../stores/cryptos"

import List from "./List"
import Details from "./Details"
import Select from "./Select"
import NothingSelected from "./NothingSelected"

export class App extends Component {
    componentDidMount() {
        const {qs, fetchCryptoCurrencies, currentFiat} = this.props
        const params = new URLSearchParams(qs)

        fetchCryptoCurrencies({
            convert: params.get("fiat") || currentFiat
        })
    }
    render() {
        return (
            <div className="container">
                <header className="mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Crypto-Currency Watch</h1>
                            <hr/>
                        </div>
                    </div>
                </header>
                <main>
                    <Select/>
                    <div className="row">
                        <List/>
                        <Route exact path="/" component={NothingSelected}/>
                        <Route path="/:id" component={Details}/>
                    </div>
                </main>
            </div>
        )
    }
}

App.propTypes = {
    qs: PropTypes.string.isRequired,
    fetchCryptoCurrencies: PropTypes.func.isRequired,
    currentFiat: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    currentFiat: state.currentFiat
})

export default compose(
    withRouter,
    connect(mapStateToProps, {fetchCryptoCurrencies})
)(App)